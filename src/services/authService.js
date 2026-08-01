import { AppError } from "../config/error.js";
import { checkingUserEmail, createUser } from "../repositories/authRepository.js";
import bcrypt from "bcryptjs";
import {v4 as uuid} from "uuid"
import jwt from 'jsonwebtoken'
import crypto from "crypto"
import { createRefreshToken } from "../repositories/sessionsRepository.js";

export class AuthService{
    // rota de registro de usuário
    static async register(body) {
        //verifica se o email já esta em uso 
        const checkEmail = await checkingUserEmail(body.email)
        if(checkEmail){
            throw new AppError('Email já esta sendo usádo!', 400, 'EMAIL_IN_USE')
        }
        //verifica se as senhas enviadas batem
        if(body.password !== body.confirmPassword){
            throw new AppError('Senhas não correpondem!', 400, 'PASSWORD_DONT_MATCH')
        }

        //criptografa senha 
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(body.password, salt)

        //salva no banco 
        const userData = {
            userName: body.userName,
            email: body.email,
            password: hash
        }
        const user = await createUser(userData)

        //gerar token de acesso e token refresh
        const accessToken = jwt.sign({userId: user.id, type: 'access'}, process.env.JWT_SECRET_KEY, {expiresIn: '15m'})
        const refreshToken = jwt.sign({userId: user.id, type: 'refresh'}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        //cripitografando token
        const hashToken = crypto.createHash('sha256').update(refreshToken).digest('hex')
        
        //guardar token no banco
        const tokenData = {
            hashToken: hashToken,
            UserId: user.id
        }
        await createRefreshToken(tokenData)

        //gerando messagem
        const messageReturn = {
            message: 'Usuário criado com sucesso',
            user: {
                userName: userData.userName,
                userId: userData.id,
                email: userData.email
            },
            accessToken: accessToken,
            refreshToken: refreshToken
        }
        return messageReturn
    }

    //rota de login do sistema
    static async login(body) {
        //verificando existencia usuário através do email 
        const userDB = await checkingUserEmail(body.email)
        if(!userDB) {
            throw new AppError('Usuário não encontrado!', 404, 'USER_NOT_FOUND')
        }
        //verificar senha 
        const checkngPassword = await bcrypt.compare(body.password, userDB.password)
        if(!checkngPassword){
            throw new AppError('Senha incorreta!', 400, 'PASSWORD_WRONG')
        }
        //gerar tokens 
        const accessToken = jwt.sign({userId: userDB.id, type: 'access'}, process.env.JWT_SECRET_KEY, {expiresIn: '15m'})
        const refreshToken = jwt.sign({userId: userDB.id, type: 'refresh'}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})

        //cripitografando token
        const hashToken = crypto.createHash('sha256').update(refreshToken).digest('hex')
        
        //guardar token no banco
        const tokenData = {
            hashToken: hashToken,
            UserId: userDB.id
        }
        await createRefreshToken(tokenData)
        //retornar mensagem
        const messageReturn = {
            message: 'Usuário logado!',
            user: {
                userName: userDB.userName,
                userId: userDB.id,
                email: userDB.email
            },
            accessToken: accessToken,
            refreshToken: refreshToken
        }
        return messageReturn
    }
}
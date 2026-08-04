import jwt from "jsonwebtoken"
import { AppError } from "../config/error.js"

// middleware de verificação de login
export function authToken(req, res, next) {
    //validando token
    const authHeader = req.headers.authorization
    if(!authHeader){
        throw new AppError('Token de autenticação não enviado!', 400, 'NOT_TOKEN')
    }

    const token = authHeader.split(' ')[1]

    try {
        const result = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(result.type !== 'access'){
            throw new AppError('Token inválido!', 400, 'NOT_TOKEN')
        }
        console.log(result.id)
        req.userId = result.id
        next()
    } catch (err) {
       throw new AppError('Token inválido!', 401, 'NOT_AUTHORIZED') 
    }
}
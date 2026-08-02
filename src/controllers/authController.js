import { AuthService } from "../services/authService.js"
import { AppError } from "../config/error.js"

export class AuthController{
    //rota de registro de usuário
    static async register(req, res, next) {
        try {
            const result = await AuthService.register(req.body)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    //rota de login
    static  async login(req, res, next) {
        try {
            const result = await AuthService.login(req.body)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    //rota refresh, para gerar novos access e refresh tokens 
    static async refresh(req, res, next) {
        try {
            //validando envio do refresh token
            const authHeader = req.headers.authorization
            if(!authHeader){
                throw new AppError('Token não enviado!', 400, 'NOT_TOKEN')
            }
            const token = authHeader.split(' ')[1]

            const result = await AuthService.refresh(token)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}
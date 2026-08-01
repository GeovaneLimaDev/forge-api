import { AuthService } from "../services/authService.js"

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
}
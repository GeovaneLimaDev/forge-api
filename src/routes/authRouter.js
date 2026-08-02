import express from "express";
import { AuthController } from "../controllers/authController.js";
import validator from "../middlewares/validate.js";
import { registerSchemas, logingSchemas } from "../schemas.js/authSchemas.js";

export const AuthRouter = express.Router()

AuthRouter.post('/register', validator(registerSchemas), AuthController.register)
AuthRouter.post('/login', validator(logingSchemas), AuthController.login)
AuthRouter.get('/refresh', AuthController.refresh)

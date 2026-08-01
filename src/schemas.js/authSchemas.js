import { z } from "zod";

//regras de validação do body da rota de register 
export const registerSchemas = z.object({
    userName: z.string('Nome de usuário inválido').min(3, "Nome de usuário deve ter mais de 3 caracters").max(20, "Nome de Usuário muito longo"),
    email: z.email('Email inválido'),
    password: z.string('Senha inválida').min(7, 'Senhda deve ter mais de 7 caracteres'),
    confirmPassword: z.string('Senha inválida')
})

//regras de validação do body da rota de login
export const logingSchemas = z.object({
    email: z.email('Email inválido'),
    password: z.string('Senha inválida').min(7, 'Senhda deve ter mais de 7 caracteres')
})
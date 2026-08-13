import { z } from "zod";

//regras do body de criação de notas
export const createSchemas = z.object({
    title: z.string('Titulo inválido').min(3, 'Title muito curto!').max(255, 'Máximo de caracteres para o titulo atingido').optional(),
    content: z.string('Nota inválida').optional()
})
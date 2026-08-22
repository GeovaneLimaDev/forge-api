import z from "zod";

//regras do body de criação de funcionalidades 
export const createSchemas = z.object({
    name: z.string('Funcionalidade inválida!').max(255, 'Máximo de caracteres para o nome da funcionalidade foi atingido1').min(3, 'O nome de uma funcionalidade deve ter o minimo de 3 caracteres'),
    description:  z.string('Descrição inválida').optional()
})

//regras do body de edição da feature 
export const updateSchemas = z.object({
    name: z.string('Funcionalidade inválida!').max(255, 'Máximo de caracteres para o nome da funcionalidade foi atingido1').min(3, 'O nome de uma funcionalidade deve ter o minimo de 3 caracteres').optional(),
    description:  z.string('Descrição inválida').optional(),
    status: z.enum(['FEATURE', 'TO_DO', 'IN_PROGRESS', 'DONE'], "Status da feature tem que ser 'FEATURE', 'TO_DO', 'IN_PROGRESS' ou 'DONE'").optional()
}).refine(
    (data) => data.description || data.name || data.status, 
    {
        message: 'Dados necessários não enviados'
    }
)
import z from "zod";

//regras do body de criação de task
export const createSchemas = z.object({
    title: z.string('Tarefa inválida!').max(255, 'Máximo de caracteres para o nome da tarefa foi atingido!').min(3, 'O nome de uma tarefa deve ter o minimo de 3 caracteres'),
    description:  z.string('Descrição inválida').optional(),
    date: z.string('Data inválida!').regex(/^\d{4}-\d{2}-\d{2}$/, 'Parâmetro date inválido, use YYYY-MM-DD')
})

//regras do body de criação de task
export const updateSchemas = z.object({
    title: z.string('Tarefa inválida!').max(255, 'Máximo de caracteres para o nome da tarefa foi atingido!').min(3, 'O nome de uma tarefa deve ter o minimo de 3 caracteres').optional(),
    description:  z.string('Descrição inválida').optional(),
    date: z.string('Data inválida!').regex(/^\d{4}-\d{2}-\d{2}$/, 'Parâmetro date inválido, use YYYY-MM-DD').optional()
}).refine(
    (data) => data.title || data.description || data.date, 
    {
        message: "Dados necessários não enviados"
    }
)

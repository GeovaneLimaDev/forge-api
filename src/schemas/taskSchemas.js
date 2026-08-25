import z from "zod";

export const createSchemas = z.object({
    title: z.string('Tarefa inválida!').max(255, 'Máximo de caracteres para o nome da tarefa foi atingido!').min(3, 'O nome de uma tarefa deve ter o minimo de 3 caracteres'),
    description:  z.string('Descrição inválida').optional(),
    date: z.string('Data inválida!')
})
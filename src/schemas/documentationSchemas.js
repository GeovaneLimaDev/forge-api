import { z } from "zod";

//regras para o body de atualização do documento 
export const updateShemas = z.object({
    title: z.string('Titulo inválido!').min(3, 'Titulo muito curto!').max(255, 'Máximo de caracteres atingido!').optional(),
    content: z.string('Conteudo inválido').optional()
})
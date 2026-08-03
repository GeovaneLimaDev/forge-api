import { z } from "zod";

//regras para o body 
export const createShemas = z.object({
    name: z.string('Nome de projeto inválido').min(3, "Nome de projeto deve ter mais de 3 caracteres").max(150, 'Limite de caracteres para o nome do projeto atingido!'),
    description: z.string('Descrição inválida').max(255, 'Maximo de caracteres para a descrição do projeto atingido!').optional(),
    deadline: z.string('Prazo inválido!').optional()
})
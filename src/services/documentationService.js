import { object } from "zod";
import { AppError } from "../config/error.js";
import { getDoc, updateDoc } from "../repositories/documentationRepository.js";

export class DocumentationService {
    //rota de busca da documentação
    static async get(projectId, userId) {
        //buscando no banco
        const documentDB = await getDoc(projectId, userId)
        if(!documentDB) {
            throw new AppError('Documentação não existente!', 404, 'DOCUMENTATION_NOT_FOUND')
        }
        //enviar para o usuário
        return documentDB
    }

    //rota de edição da documntação
    static async update(projectId, userId, body) {
        //buscando no banco
        const documentDB = await getDoc(projectId, userId)
        if(!documentDB) {
            throw new AppError('Documentação não existente!', 404, 'DOCUMENTATION_NOT_FOUND')
        }
        //gerando novo arquivo 
        const newDocumetation = {
            title: body.title ? body.title : documentDB.title,
            content: body.content ? body.content : documentDB.content
        }
        //salvando novo conteudo
        await updateDoc(newDocumetation, projectId, userId)
        //enviar mensagem para o usuário
        return {
            message: 'Documetação atualizada!'
        }
    }

}
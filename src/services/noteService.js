import { AppError } from "../config/error.js"
import Project from "../models/Project.js"
import { createNote } from "../repositories/noteRepository.js"
import { getOneProject } from "../repositories/projectRepository.js"
import { uppercaseLetters } from "../utils/uppercaseLetters.js"

export class NoteService{
    //rota de criação de notas
    static async create(userId, body, projectId) {
        //verificar se ao menos uma dos campos de criação foi enviado
        if(!body.title & !body.content){
            throw new AppError('Dados necessários não enviados', 400, 'LACK_OF_DATA')
        }
        //verificando se projeto existe
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB){
            throw new AppError('Projeto não encontrado', 404, 'PROJECT_NOT_FOUND')
        }
        //criando objeto 
        const newNote = {
            title: body.title ? body.title.trim() : `Note - ${uppercaseLetters(projectDB.name)}`,
            content: body.content,
            userId: userId,
            ProjectId: projectId
        }
        //salvando projeto 
        const note = await createNote(newNote)
        //mensagem para usuário
        return {
            message: `Uma nova nota foi adicionada ao projeto ${uppercaseLetters(projectDB.name)}`,
            note: note
        } 
    }
}
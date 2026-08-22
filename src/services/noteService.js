import { AppError } from "../config/error.js"
import Project from "../models/Project.js"
import { createNote, deleteNote, getAllNote, getNote, updateNote } from "../repositories/noteRepository.js"
import { getOneProject } from "../repositories/projectRepository.js"
import { uppercaseLetters } from "../utils/uppercaseLetters.js"

export class NoteService{
    //rota de criação de notas
    static async create(userId, body, projectId) {
        //verificando se projeto existe
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB){
            throw new AppError('Projeto não encontrado', 404, 'PROJECT_NOT_FOUND')
        }
        //criando objeto 
        const newNote = {
            title: body.title ? body.title.trim() : `Note - ${uppercaseLetters(projectDB.name)}`,
            content: body.content,
            UserId: userId,
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

    //rota de edição das notas 
    static async update(userId, projectId, noteId, body) {
        //validando existencia do projeto no banco 
        const projectDB = getOneProject(projectId, userId)
        if(!projectDB) { 
            throw new AppError('Projeto não encontrada!', 404, 'PROJECT_NOT_FOUND')
        }
        //validar existência da nota no banco
        const noteDB = await getNote(userId, noteId)
        if(!noteDB) {
            throw new AppError('Nota não encontrada!', 404, 'NOTE_NOT_FOUND')
        }
        //craindo novo conteudo
        const newNote = {
            title: body.title ? body.title.trim() : noteDB.title,
            content: body.content ? body.content : noteDB.content 
        }
        //salvando no banco
        await updateNote(userId, noteId, newNote)
        //enviando para usuário 
        return {
            message: "Nota atualizada!"
        }
    }

    //rota para deletar notas
    static async delete(userId, noteId, projectId) {
        //validando existencia do projeto no banco 
        const projectDB = getOneProject(projectId, userId)
        if(!projectDB) { 
            throw new AppError('Projeto não encontrada!', 404, 'PROJECT_NOT_FOUND')
        }
        //validar existência da nota no banco
        const noteDB = await getNote(userId, noteId)
        if(!noteDB) {
            throw new AppError('Nota não encontrada!', 404, 'NOTE_NOT_FOUND')
        }
        //deletando nota
        await deleteNote(userId, noteId)
        //enviando para usuário 
        return {
            message: "Nota deletada!"
        }
    }

    //rota para ler uma única nota
    static async readOne(userId, noteId, projectId) {
        //validando existencia do projeto no banco 
        const projectDB = getOneProject(projectId, userId)
        if(!projectDB) { 
            throw new AppError('Projeto não encontrada!', 404, 'PROJECT_NOT_FOUND')
        }
        //validar existência da nota no banco
        const noteDB = await getNote(userId, noteId)
        if(!noteDB) {
            throw new AppError('Nota não encontrada!', 404, 'NOTE_NOT_FOUND')
        }
        //enviando para usuário 
        return noteDB
    }

    //rota para ler uma única nota
    static async listAll(userId, projectId) {
        //verificando existencia do projeto
        const projectDB = await getOneProject(projectId, userId)
        if(!projectDB){
            throw new AppError('Projeto não encontrado', 404, 'PROJECT_NOT_FOUND')
        }
        //buscando no banco as notas
        const listNotes = await getAllNote(userId, projectId)
        if(listNotes.length === 0) {
            return {
                message: `O projeto '${projectDB.name}' não tem notas salvas.`
            }
        }
        //enviando para o usuário
        const listOrder = listNotes.sort((a, b) => b.updatedAt - a.updatedAt) 
        return listOrder
    }
}
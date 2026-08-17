import { NoteService } from "../services/noteService.js"

export class NoteController{
    //rota de criação de notas
    static async create(req, res, next) {
        try {
            const result = await NoteService.create(req.userId, req.body, req.params.projectId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    //rota de edição da nota
    static async update(req, res, next) {
        try {
            const result = await NoteService.update(req.userId, req.params.noteId, req.body)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    //rota para deletar notas
    static async delete(req, res, next) {
        try {
            const result = await NoteService.delete(req.userId, req.params.noteId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    //rota para deletar notas
    static async readOne(req, res, next) {
        try {
            const result = await NoteService.readOne(req.userId, req.params.noteId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    //rota para deletar notas
    static async listAll(req, res, next) {
        try {
            const result = await NoteService.listAll(req.userId, req.params.projectId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}
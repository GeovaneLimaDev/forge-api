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
}
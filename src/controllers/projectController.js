import { ProjectService } from "../services/projectService.js"

export class ProjectController {
    //rota de criação de projetos
    static async create(req, res, next) {
        try {
            const result = await ProjectService.create(req.body, req.userId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    //rota para deletar projeto
    static async delete(req, res, next) {
        try {
            const result = await ProjectService.delete(req.params.projectId, req.userId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    //listando projetos
    static async getAll(req, res, next) {
        try {
            const result = await ProjectService.getAll(req.userId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    //buscando um projeto especifíco 
    static async getOne(req, res, next) {
        try {
            const result = await ProjectService.getOne(req.params.projectId ,req.userId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}
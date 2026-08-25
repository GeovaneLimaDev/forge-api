import { TaskService } from "../services/taskService.js"

export class TaskController {
    //rota de criação de task
    static async create(req, res, next) {
        try {
            const result = await TaskService.create(req.userId, req.body)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    //rota para deletar task
    static async delete(req, res, next) {
        try {
            const result = await TaskService.delete(req.userId, req.params.taskId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    //rota de busca, para um única task
    static async getOne(req, res, next) {
        try {
            const result = await TaskService.getOne(req.userId, req.params.taskId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}
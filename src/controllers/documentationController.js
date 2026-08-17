import { DocumentationService } from "../services/documentationService.js"

export class DocumentationController {
    //rota de busca da documentação
    static async get(req, res, next) {
        try {
            const result = await DocumentationService.get(req.params.projectId, req.userId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    //rota de edição da documentação
    static async update(req, res, next) {
        try {
            const result = await DocumentationService.update(req.params.projectId, req.userId, req.body)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}
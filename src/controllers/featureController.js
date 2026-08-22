import { FeatureService } from "../services/featureService.js"

export class FeatureController {
    //rota de criação das funcionalidades
    static async create(req, res, next) {
        try {
            const result = await FeatureService.create(req.userId, req.params.projectId, req.body)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    //rota para buscar todas as funcionalidades de um projeto 
    static async getAll(req, res, next) {
        try {
            const result = await FeatureService.getAll(req.userId, req.params.projectId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    //rota de edição da feature 
    static async update(req, res, next) {
        try {
            const result = await FeatureService.update(req.userId, req.params.projectId, req.params.featureId, req.body)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    //rota de exclusão de feature
    static async delete(req, res, next) {
        try {
            const result = await FeatureService.delete(req.userId, req.params.projectId, req.params.featureId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    
}
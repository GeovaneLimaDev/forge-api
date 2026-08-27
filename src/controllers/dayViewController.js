import { DayViewService } from "../services/dayViewService.js"

export class DayViewController {
    //rota de busca geral para a view de tarefas do dia
    static async getAll(req, res, next){
        try {
            const result = await DayViewService.getAll(req.query.date, req.userId)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}
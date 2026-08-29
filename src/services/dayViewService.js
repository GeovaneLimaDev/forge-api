import { AppError } from "../config/error.js";
import { getFeatureDate } from "../repositories/featureRepository.js";
import { getProjectDate } from "../repositories/projectRepository.js";
import { getTaskDate } from "../repositories/taskRepository.js";

export class DayViewService {
    //rota de busca geral para a view de tarefas do dia
    static async getAll(date, userId){
        //Validando date
        if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            throw new AppError('Parâmetro date é obrigatório, use o formato YYYY-MM-DD', 400, 'INVALID_DATE')
        }
        //buscando dados
        const projectDB = await getProjectDate(date, userId)
        const taskDB = await getTaskDate(date, userId)
        const featureDB = await getFeatureDate(date, userId)
        //formando objeto 
        return {
            project: projectDB,
            task: taskDB,
            feature: featureDB
        }
    }
}
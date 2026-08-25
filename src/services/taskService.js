import { AppError } from "../config/error.js"
import { createTask, deleteTask, getOneTask, updateTask } from "../repositories/taskRepository.js"

export class TaskService {
    //rota de criação de task
    static async create(userId, body) {
        //verificando data 
        if(!body.date || !/^\d{4}-\d{2}-\d{2}$/.test(body.date)){
            throw new AppError('Parâmetro date inválido, use YYYY-MM-DD', 400, 'INVALID_DATE')
        }
        //objeto de criação
        const newTask = {
            title: body.title.trim(),
            description: body.description,
            date: body.date,
            UserId: userId
        }
        //salvando dados no banco 
        const task = await createTask(newTask)
        //enviando messagem para usuário
        return {
            message: 'Tarefa salva!',
            task: task
        }
    }

    //rota para deletar task
    static async delete(userId, taskId) {
        //validando exitencia da tarefa no banco 
        const taskDB = await getOneTask(userId, taskId)
        if(!taskDB ){
            throw new AppError('Tarefa não encontrada!', 404, 'TASK_NOT_FOUND')
        }
        //deletando task
        await deleteTask(userId, taskId)
        //enviando messagem para usuário
        return {
            message: 'Tarefa deletada!'
        }
    }

    //rota de busca, para um única task
    static async getOne(userId, taskId) {
        //validando exitencia da tarefa no banco 
        const taskDB = await getOneTask(userId, taskId)
        if(!taskDB ){
            throw new AppError('Tarefa não encontrada!', 404, 'TASK_NOT_FOUND')
        }
        //enviando messagem para usuário
        return taskDB
    }

    //rota de update das task
    static async update(userId, taskId, body) {
        //validar existencia no banco 
        const taskDB = await getOneTask(userId, taskId)
        if(!taskDB) {
            throw new AppError('Tarefa não encontrada!', 404, 'TASK_NOT_FOUND')
        }
        //manipulando novo objeto
        const newTask = {
            title: body.title ? body.title.trim() : taskDB.title,
            description: body.description ? body.description : taskDB.description,
            date: body.date ? body.date : taskDB.date,
        } 
        //salvando no banco 
        await updateTask(userId, taskId, newTask)
        //enviando mensagem para usuário
        return {
            message: 'Tarefa atualizada!'
        }
    }
}
import Task from "../models/Task.js";

//criando task 
export async function createTask (data) {
    const task = await Task.create(data)
    return task
}

//buscando uma task 
export async function getOneTask(userId, taskId) {
    const task = await Task.findOne({where: {UserId: userId, id: taskId}})
    return task
}

//deletando task 
export async function deleteTask(userId, taskId) {
    await Task.destroy({where: {UserId: userId, id: taskId}})
}

//atualizando task 
export async function updateTask(userId, taskId, data) {
    await Task.update(data, {where: {UserId: userId, id: taskId}})
}

//buscando projetos usando a data de entrega do projeto como where
export async function getTaskDate(date, userId) {
    const list = await Task.findAll({where: {UserId: userId, date: date}})
    return list
}
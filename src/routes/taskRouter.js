import express from 'express'
import { TaskController } from '../controllers/taskController.js'
import { authToken } from '../middlewares/authToken.js'
import validator from '../middlewares/validate.js'
import { createSchemas } from '../schemas/taskSchemas.js'

export const TaskRouter = express.Router()

//rota de criação de task
TaskRouter.post('/', authToken, validator(createSchemas), TaskController.create)
//deletar task 
TaskRouter.delete('/:taskId', authToken, TaskController.delete)
//rota de busca, para um única task
TaskRouter.get('/:taskId', authToken, TaskController.getOne) 
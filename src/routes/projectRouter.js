import express from "express";
import { authToken } from "../middlewares/authToken.js";
import { ProjectController } from "../controllers/projectController.js";
import { createSchemas, updateSchemas } from "../schemas/projectSchemas.js";
import validator from "../middlewares/validate.js";

export const ProjectRouter = express.Router()

//rota de criação de projetos
ProjectRouter.post('/', authToken, validator(createSchemas), ProjectController.create)
//rota para deletar projeto
ProjectRouter.delete('/:projectId', authToken, ProjectController.delete)
//rota de buscar projestos
ProjectRouter.get('/', authToken, ProjectController.getAll)
//rota de buscar um projesto
ProjectRouter.get('/:projectId', authToken, ProjectController.getOne)
//editando projeto
ProjectRouter.patch('/:projectId', authToken, validator(updateSchemas),ProjectController.update)
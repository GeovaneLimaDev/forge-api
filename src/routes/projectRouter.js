import express from "express";
import { authToken } from "../middlewares/authToken.js";
import { ProjectController } from "../controllers/projectController.js";
import { createShemas } from "../schemas.js/projectSchemas.js";
import validator from "../middlewares/validate.js";

export const ProjectRouter = express.Router()

//rota de criação de projetos
ProjectRouter.post('/', authToken, validator(createShemas), ProjectController.create)
//rota para deletar projeto
ProjectRouter.delete('/:projectId', authToken, ProjectController.delete)
//rota de buscar projestos
ProjectRouter.get('/', authToken, ProjectController.getAll)
//rota de buscar um projesto
ProjectRouter.get('/:projectId', authToken, ProjectController.getOne)
import express from 'express'
import { DocumentationController } from '../controllers/documentationController.js'
import { authToken } from '../middlewares/authToken.js'
import validator from '../middlewares/validate.js'
import { updateSchemas } from '../schemas/documentationSchemas.js'

export const DocumentationRouter = express.Router()

//rota de busca da documentação
DocumentationRouter.get('/:projectId', authToken, DocumentationController.get)
//rota de edição da documentação
DocumentationRouter.patch('/:projectId', authToken, validator(updateSchemas), DocumentationController.update)
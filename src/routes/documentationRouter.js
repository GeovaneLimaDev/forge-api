import express from 'express'
import { DocumentationController } from '../controllers/documentationController.js'
import { authToken } from '../middlewares/authToken.js'
import validator from '../middlewares/validate.js'
import { updateShemas } from '../schemas/documentationShemas.js'

export const DocumentationRouter = express.Router()

//rota de busca da documentação
DocumentationRouter.get('/:ProjectId', authToken, DocumentationController.get)
//rota de edição da documentação
DocumentationRouter.patch('/:ProjectId', authToken, validator(updateShemas), DocumentationController.update)
import express from 'express'
import { authToken } from '../middlewares/authToken.js'
import { FeatureController } from '../controllers/featureController.js'
import { createSchemas, updateSchemas } from '../schemas/featureSchemas.js'
import validator from '../middlewares/validate.js'

export const FeatureRouter = express.Router()

//rota de criação das funcionalidades 
FeatureRouter.post('/:projectId', authToken, validator(createSchemas), FeatureController.create)
//rota para buscar todas as funcionalidades de um projeto 
FeatureRouter.get('/:projectId', authToken, FeatureController.getAll)
//rota de edição da feature 
FeatureRouter.patch('/:projectId/:featureId', authToken, validator(updateSchemas), FeatureController.update)
//rota de exclusão de feature
FeatureRouter.delete('/:projectId/:featureId', authToken, FeatureController.delete)
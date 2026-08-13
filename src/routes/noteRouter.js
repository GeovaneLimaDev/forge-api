import express, { Router } from 'express'
import { authToken } from '../middlewares/authToken.js'
import validator from '../middlewares/validate.js'
import { NoteController } from '../controllers/noteController.js'
import { createSchemas } from '../schemas/noteSchemas.js'

export const NoteRouter = express.Router() 

NoteRouter.post('/:projectId', authToken, validator(createSchemas), NoteController.create)
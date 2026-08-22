import express, { Router } from 'express'
import { authToken } from '../middlewares/authToken.js'
import validator from '../middlewares/validate.js'
import { NoteController } from '../controllers/noteController.js'
import { createAndUpdateSchemas } from '../schemas/noteSchemas.js'

export const NoteRouter = express.Router() 

//rota de criação de notas
NoteRouter.post('/:projectId', authToken, validator(createAndUpdateSchemas), NoteController.create)
//rota de edição de notas
NoteRouter.patch('/:projectId/:noteId', authToken, validator(createAndUpdateSchemas), NoteController.update)
//deletando nota
NoteRouter.delete('/:projectId/:noteId', authToken, NoteController.delete)
//lendo uma nota
NoteRouter.get('/:projectId/:noteId', authToken, NoteController.readOne)
//listando todas as notas
NoteRouter.get('/:projectId', authToken, NoteController.listAll)
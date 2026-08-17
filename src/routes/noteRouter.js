import express, { Router } from 'express'
import { authToken } from '../middlewares/authToken.js'
import validator from '../middlewares/validate.js'
import { NoteController } from '../controllers/noteController.js'
import { createAndUpdateSchemas } from '../schemas/noteSchemas.js'

export const NoteRouter = express.Router() 

//rota de criação de notas
NoteRouter.post('/project/:projectId', authToken, validator(createAndUpdateSchemas), NoteController.create)
//rota de edição de notas
NoteRouter.patch('/:noteId', authToken, validator(createAndUpdateSchemas), NoteController.update)
//deletando nota
NoteRouter.delete('/:noteId', authToken, NoteController.delete)
//lendo uma nota
NoteRouter.get('/:noteId', authToken, NoteController.readOne)
//listando todas as notas
NoteRouter.get('/project/:projectId', authToken, NoteController.listAll)
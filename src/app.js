import 'dotenv/config'
import express, { urlencoded } from 'express';
import { conn } from './config/databese.js';

export const app = express()

import './models/index.js' //arquivo de configurações dos models 

import { AuthRouter } from './routes/authRouter.js';
import { ProjectRouter } from './routes/projectRouter.js';
import { DocumentationRouter } from './routes/documentationRouter.js';
import { NoteRouter } from './routes/noteRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { configDotenv } from 'dotenv';

//config do body
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

//config das rotas 
app.use('/project/note', NoteRouter)
app.use('/project/documentation', DocumentationRouter)
app.use('/project', ProjectRouter)
app.use('/auth', AuthRouter)

//config do middleware de erro 
app.use(errorHandler)
import 'dotenv/config'
import express, { urlencoded } from 'express';
import helmet from 'helmet';
import { conn } from './config/database.js';

export const app = express()

import './models/index.js' //arquivo de configurações dos models 

import { AuthRouter } from './routes/authRouter.js';
import { ProjectRouter } from './routes/projectRouter.js';
import { DocumentationRouter } from './routes/documentationRouter.js';
import { NoteRouter } from './routes/noteRouter.js';
import { FeatureRouter } from './routes/featureRouter.js';
import { TaskRouter } from './routes/taskRouter.js';
import { DayViewRouter } from './routes/dayViewRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

//configurando helmet 
app.use(helmet())

//config do body
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

//config das rotas 
app.use('/task', TaskRouter)
app.use('/project/feature', FeatureRouter)
app.use('/project/note', NoteRouter)
app.use('/project/documentation', DocumentationRouter)
app.use('/project', ProjectRouter)
app.use('/day-view', DayViewRouter)
app.use('/auth', AuthRouter)

//config do middleware de erro 
app.use(errorHandler)
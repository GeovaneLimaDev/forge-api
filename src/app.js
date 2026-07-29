import express, { urlencoded } from 'express';
import { conn } from './config/databese.js';

export const app = express()

import './models/index.js'

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

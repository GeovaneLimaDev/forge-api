import express from 'express'
import { authToken } from '../middlewares/authToken.js'
import { DayViewController } from '../controllers/dayViewController.js'

export const DayViewRouter = express.Router()

DayViewRouter.get('/', authToken, DayViewController.getAll)
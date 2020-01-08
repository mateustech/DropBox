import { Router } from 'express'
import BoxController from './controllers/BoxController'

const routes = new Router()

routes.post('/boxes', BoxController.story)

export default routes
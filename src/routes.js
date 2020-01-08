import { Router } from 'express'
import multer from 'multer'
import multerconfig from './config/multer'
import BoxController from './controllers/BoxController'
import FileController from './controllers/FileController'

const routes = new Router()

routes.post('/boxes', BoxController.store)
routes.get('/boxes/:id', BoxController.show)
routes.post('/boxes/:id/files', multer(multerconfig).single('file'), FileController.store)

export default routes
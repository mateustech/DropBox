const Router = require('express')
const multer = require('multer')
const multerconfig = require('./config/multer')
const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

const routes = new Router()

routes.get('/', (req, res) => {
  return res.send('Testando API')
})
routes.post('/boxes', BoxController.store)
routes.get('/boxes/:id', BoxController.show)
routes.post('/boxes/:id/files', multer(multerconfig).single('file'), FileController.store)

module.exports = routes
import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import path from 'path'
class App {
  constructor() {
    this.server = express();
    this.middlewares()
    this.routes()
    this.connecttion()
  }
  middlewares() {
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))
  }
  routes() {
    this.server.use(routes)
  }
  connecttion() {
    mongoose.connect('mongodb+srv://admin:admin@server-vg6ba.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('MongooDB Conectado!')
    }).catch(err => {
      console.error('Deu Ruim na Conexao', err)
    })
  }
}
export default new App().server

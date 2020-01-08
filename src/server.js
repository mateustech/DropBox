const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box)
  })
})

app.use(cors())//Todo Mundo Pode Acessar 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(routes)

mongoose.connect('mongodb+srv://admin:admin@server-vg6ba.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongooDB Conectado!')
}).catch(err => {
  console.error('Deu Ruim na Conexao', err)
})

app.use((req, res, next) => {
  req.io = io

  return next()
})

server.listen(process.env.PORT || 3333)

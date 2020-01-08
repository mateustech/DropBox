import File from '../models/File'
import Box from '../models/Box'

class FileController {
  async store(req, res) {
    const { id } = req.params
    const box = await Box.findById(id)

    const file = await File.create({
      title: req.file.originalname,
      path: req.file.key
    })

    box.files.push(file)
    await box.save()

    req.io.sockets.in(box._id).emit('file', file)

    return res.json(file)
  }
}
export default new FileController()
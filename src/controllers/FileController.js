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

    return res.json(file)
  }
}
export default new FileController()
import Box from '../models/Box'

class BoxController {
  async store(req, res) {
    const response = req.body
    const box = await Box.create(response)
    return res.json(box)

  }
  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: { sort: { createdAt: -1 } }
    })
    return res.json(box)
  }
}
export default new BoxController()
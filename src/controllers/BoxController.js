import Box from '../models/Box'

class BoxController {
  async story(req, res) {
    const response = req.body
    const box = await Box.create(response)
    return res.json(box)

  }
}
export default new BoxController()
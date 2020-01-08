import mongoose from 'mongoose'

const File = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})
export default mongoose.model("File", File)
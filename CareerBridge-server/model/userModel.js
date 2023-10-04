import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    default:"user"
  }
})

export default mongoose.model("user",userSchema)

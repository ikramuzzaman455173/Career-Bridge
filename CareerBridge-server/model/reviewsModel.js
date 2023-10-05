import mongoose from 'mongoose'

const reviewsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  userImg: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userTitle: {
    type: String,
    required: true
  },
  commentTitle: {
    type: String,
    required: true
  }
})

export default mongoose.model("review", reviewsSchema)
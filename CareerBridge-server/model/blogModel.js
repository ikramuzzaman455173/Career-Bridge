import mongoose from 'mongoose'
const blogSchema = new mongoose.Schema({
  imgSrc: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  currentTime: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("blog",blogSchema)
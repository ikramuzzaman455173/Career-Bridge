import blogModel from "../model/blogModel.js";

export const getBlogs = async (req, res) => {
  try {
    const blogsData = await blogModel.find()
    if (blogsData.length === 0) return res.status(404).json({ message: 'Blog not found!' })
    res.status(200).json(blogsData)
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
    // console.log({ message: error });
  }
}

export const addBlog = async (req, res) => {
  try {
    const blogData = new blogModel(req.body)
    const { title } = blogData
    const existsBlog = await blogModel.findOne({ title })
    if (existsBlog) return res.status(404).json({ message: "Blog has been already exits!" })
    const saveBlog = await blogData.save()
    res.status(200).json(saveBlog)
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
    // console.log({ message: error });
  }
}


export const updateBlog = async (req, res) => {
  try {
    const id = req.params.id
    const existsBlog = await blogModel.findOne({ _id: id })
    if (!existsBlog) return res.status(404).json({ message: "Blog not found!" })
    const updateBlog = await blogModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(updateBlog)
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
    // console.log({ message: error });
  }
}


export const deleteBlog = async (req, res) => {
  try {
    const _id = req.params.id
    const existsBlog = await blogModel.findOne({ _id })
    if (!existsBlog) return res.status(404).json({ message: "Blog not found!" })
    await blogModel.findByIdAndDelete(_id)
    res.status(200).json({ message: "Blog deleted successfully!" })
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
    // console.log({ message: error });
  }
}

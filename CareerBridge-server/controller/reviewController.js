import reviewsModel from "../model/reviewsModel.js"


export const getReview = async (req, res) => {
  try {
    const getReviews = await reviewsModel.find()
    if (getReviews.length === 0) return res.status(404).json({ message: "Review not found!" })
    res.status(200).json(getReviews)
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
    // console.log({ message: error });
  }
}

export const addReview = async (req, res) => {
  try {
    const reviewData = new reviewsModel(req.body)
    const saveReview = await reviewData.save()
    res.status(200).json(saveReview)
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
    // console.log({ message: error });
  }
}

export const updateReview = async (req, res) => {
  try {
    const id = req.params.id
    const existReview = await reviewsModel.findOne({ _id: id })
    if (!existReview) return res.status(404).json({ message: "Review not found !" })
    const updateReview = await reviewsModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(updateReview)
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
    // console.log({ message: error });
  }
}

export const deleteReview = async (req, res) => {
  try {
    const _id = req.params.id
    const existReview = await reviewsModel.findOne({ _id })
    if (!existReview) return res.status(404).json({ message: "Review not found !" })
    await reviewsModel.findByIdAndDelete(_id)
    res.status(200).json({message:'Review deleted successfully!'})
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
    // console.log({ message: error });
  }
}

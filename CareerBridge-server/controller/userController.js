import userModel from "../model/userModel.js";

export const newUser = async (req, res) => {
  try {
    const userData = new userModel(req.body)
    const { email } = userData
    const existUser = await userModel.findOne({ email })
    // console.log({email,userData});
    if (existUser) return res.status(404).json({ message: 'User has been already exists!' })
    const savedUser = await userData.save()
    res.status(200).json(savedUser)
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
  }
}

export const findUser = async (req, res) => {
  try {
    const getUser = await userModel.find()
    if (getUser.length === 0) return res.status(404).json({ message: "User Not Found!" })
    res.status(200).json(getUser)
  } catch (error) {
    res.status(500).json({ message: "Internal server error 500 ⚠" })
}
}
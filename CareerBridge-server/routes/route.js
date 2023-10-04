import express from 'express'
import { findUser, newUser, updateUser } from '../controller/userController.js'


const route = express.Router()

// All routes

//get user route
route.get("/users", findUser)

//create new user
route.post("/newUser", newUser)

route.put("/userUpdate/:id",updateUser)

export default route
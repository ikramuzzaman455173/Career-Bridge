import express from 'express'
import { findUser, newUser } from '../controller/userController.js'


const route = express.Router()

// All routes

//get user route
route.get("/users", findUser)

//create new user
route.post("/newUser", newUser)



export default route
import express from 'express'
import { deleteUser, findUser, newUser, updateUser } from '../controller/userController.js'


const route = express.Router()

// All routes for User

route.get("/users", findUser)

route.post("/newUser", newUser)

route.put("/userUpdate/:id", updateUser)

route.delete("/deleteUser/:id",deleteUser)


export default route
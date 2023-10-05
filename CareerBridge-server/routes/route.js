import express from 'express'
import { deleteUser, findUser, newUser, updateUser } from '../controller/userController.js'
import { addReview, deleteReview, getReview, updateReview } from '../controller/reviewController.js'
import { addBlog, deleteBlog, getBlogs, updateBlog } from '../controller/blogController.js'


const route = express.Router()

// All routes for User

route.get("/users", findUser)

route.post("/newUser", newUser)

route.put("/userUpdate/:id", updateUser)

route.delete("/userDelete/:id", deleteUser)

// All route for page reviews

route.get("/reviews", getReview)

route.post("/newReview", addReview)

route.put("/reviewUpdate/:id",updateReview)

route.delete("/reviewDelete/:id", deleteReview)

// All route for page blogs

route.get("/blogs", getBlogs)

route.post("/newBlog", addBlog)

route.put("/blogUpdate/:id", updateBlog)

route.delete("/blogDelete/:id",deleteBlog)

export default route
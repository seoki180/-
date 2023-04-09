const user = require("./UserController")
const userRouter = require("express").Router()

const { uploads } = require("../../middleware/multer")
const { verifyToken } = require("../../middleware/verifyToken")

userRouter.get("/profile",verifyToken,user.profile)
userRouter.post("/upload",verifyToken,uploads.single("img"),user.upload)


module.exports = userRouter
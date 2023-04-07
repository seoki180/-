const user = require("./UserController")
const userRouter = require("express").Router()

const {verifyToken} = require("../../middleware/verifyToken")

userRouter.get("/profile",verifyToken,user.profile)

module.exports = userRouter
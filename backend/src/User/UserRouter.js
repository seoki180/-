const userRouter = require("express").Router()
const user = require("./UserController")

const {verifyToken} = require("../../middleware/verifyToken")

userRouter.get("/profile",verifyToken,user.profile)

module.exports = userRouter
const authRouter = require("express").Router()
const auth = require("./AuthController")


authRouter.post("/login",auth.login)
authRouter.post("/register",auth.register)

module.exports = authRouter
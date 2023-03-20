const ctrl = require("./users_ctrl")
const router = require("express").Router()
const {verifyToken} = require("../middleware/verifyToken")

router.post("/login",ctrl.post.login)

router.post("/register",ctrl.post.register)

router.get("/profile",verifyToken,ctrl.post.profile)

module.exports = router
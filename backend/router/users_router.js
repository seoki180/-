const ctrl = require("./users_ctrl")
const router = require("express").Router()
const {verifyToken} = require("../middleware/verifyToken")

router.post("/login",ctrl.post.login)
router.get("/login",verifyToken, ctrl.page.login)
router.delete("/login",)

router.post("/register",ctrl.post.register)

module.exports = router
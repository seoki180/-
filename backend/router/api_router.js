const ctrl = require("./route.ctrl")
const router = require("express").Router()
const {verifyToken} = require("../middleware/verifyToken")

router.post("/login",ctrl.processes.login)
router.get("/test",verifyToken, ctrl.page.login)


router.post("/register",ctrl.processes.register)

module.exports = router
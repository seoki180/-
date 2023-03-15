const ctrl = require("./route.ctrl")
const router = require("express").Router()

router.post("/login",ctrl.process.login)
router.post("/register",ctrl.process.register)

module.exports = router
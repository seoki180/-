const router = require("express").Router()
const User = require("../src/model/User")

router.post("/",async (req,res)=>{
    const user = new User(req.body)
    res.json(await user.login())
})

module.exports = router

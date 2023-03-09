const morgan = require("morgan")
const express = require("express")
const body_parser = require("body-parser")
const app = express()

// const UserStorage = require("./src/model/UserStorage")
const User = require("./src/model/User")

app.use(morgan('dev'))

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.get("/login",async (req,res)=>{
    const user = new User(req.body)
    res.json(await user.login())
})
app.post("/login",async (req,res)=>{
    const user = new User(req.body)

    res.json(await user.login())
}) 



module.exports = app
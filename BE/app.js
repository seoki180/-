const morgan = require("morgan")
const express = require("express")
const body_parser = require("body-parser")
const app = express()


const User = require("./src/model/User")


const PORT = 3000
app.use(morgan('dev'))

app.set("views","./src/views")
app.set("view engine", "ejs")
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("home/index")
})

app.get("/login",async (req,res)=>{
    const user = new User(req.body)
    res.json(await user.login())
})
app.post("/login",async (req,res)=>{
    const user = new User(req.body)

    res.json(await user.login())
}) 

app.listen(PORT,()=>{
    console.log(`port on ${PORT}`)
})

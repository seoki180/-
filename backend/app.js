const morgan = require("morgan")
const express = require("express")
const session = require("express-session")
const methodOverride = require("method-override")
const body_parser = require("body-parser")
const app = express()

const ApiRouter = require("./router/api_router")


// app.use(session({
//     secret : "mykey",
//     resave : "true",
//     saveUninitialized : true,
// })
// )
app.set("view engine","ejs")
app.set("views","./public")
app.use(morgan('dev'))
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.use("/api",ApiRouter)
app.use((req,res,next)=>{
        res.status(404).send("404/not found")
    })
    
app.use((err,req,res,next)=>{
    res.status(500).send("omg server on exception")
})

module.exports = app;
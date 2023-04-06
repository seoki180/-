const morgan = require("morgan")
const express = require("express")
const session = require("express-session")
const methodOverride = require("method-override")
const body_parser = require("body-parser")
const app = express()

// const UserRoute = require("./router/users_router")
const IdRouter = require("./router/id_router")
const AuthRouter = require("./src/Auth/AuthRouter")
const UserRouter = require("./src/User/UserRouter")

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

app.use("/id",IdRouter)
// app.use("/users",UserRoute)
app.use("/auth",AuthRouter)
app.use("/user",UserRouter)


app.use((err,req,res,next)=>{
    res.status(404).send("404/not found")
})
    
app.use((err,req,res,next)=>{
    res.status(500).send("omg server on exception")
})

module.exports = app;
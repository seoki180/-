const morgan = require("morgan")
const express = require("express")
const body_parser = require("body-parser")
const app = express()

const LoginRouter = require("./router/login_router")
const RegisterRouter = require("./router/register_router")
const User = require("./src/model/User")


app.use(morgan('dev'))

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.use("/login",LoginRouter)
app.use("/register",RegisterRouter)

module.exports = app;
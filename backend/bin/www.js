const app =require("../app")
const dotenv = require("dotenv")
dotenv.config("../.env")

const HTTP_PORT = process.env.HTTP_PORT || 52001

app.listen(HTTP_PORT,()=>{
    console.log(`server on ${HTTP_PORT}`)
})
    


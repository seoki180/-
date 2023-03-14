const app =require("../app")
const dotenv = require("dotenv")
dotenv.config("../.env")

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server on ${PORT}`)
})
    


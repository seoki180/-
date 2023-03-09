const app = require("../app")

const PORT = process.env.PORT || 52000

app.listen(PORT,()=>{
    console.log(`server open in ${PORT}`)
})
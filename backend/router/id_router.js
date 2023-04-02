const router = require("express").Router()
const user = require("../src/model/User")
const UserStorage = require("../src/model/UserStorage")
const fs = require("fs")


router.get("/:id",async (req,res) =>{
    const id = req.params
    const photos = await UserStorage.getUserPhoto(id.id)
    console.log(photos)
    var fileName = photos[0]["photoUrl"]
    fs.readFile(fileName,(err,data)=>{
        if(err) {
            console.log(err)
            throw err
        }
        // res.writeHead(200, { "Context-Type": "image/png" });//보낼 헤더를 만듬
        res.write(data);   //본문을 만들고
        res.end();
    })

    
})

module.exports = router
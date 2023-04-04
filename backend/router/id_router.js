const router = require("express").Router()
const {verifyToken} = require('../middleware/verifyToken')
const PhotoStorage = require("../src/model/PhotoStorage")
const fs = require("fs")


router.get("/:userId",verifyToken,async (req,res) =>{
    const id = req.params.userId
    const photoStorage = await PhotoStorage.getPhotoUrl(id)
    console.log(photoStorage)
    res.json(photoStorage)

    // const photos = await UserStorage.getUserPhoto(id.id)
    // console.log(photos)
    // var fileName = photos[0]["photoUrl"]
    // fs.readFile(fileName,(err,data)=>{
    //     if(err) {
    //         console.log(err)
    //         throw err
    //     }
    //     // res.writeHead(200, { "Context-Type": "image/png" });//보낼 헤더를 만듬
    //     res.write(data);   //본문을 만들고
    //     res.end();
    // })

    
})

module.exports = router
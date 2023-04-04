const ctrl = require("./users_ctrl")
const router = require("express").Router()

const {verifyToken} = require("../middleware/verifyToken")
const { uploads } = require("../middleware/multer")


router.post("/login",ctrl.post.login)

router.post("/register",ctrl.post.register)

router.get("/me",verifyToken,ctrl.post.getInfo)

router.get("/photos",verifyToken,ctrl.post.getPhotos)

router.get("/uploads",(req,res)=>{
    res.render("views/uploads")
})

router.post("/uploads",verifyToken,uploads.single("image"),ctrl.post.uploadPhoto)

module.exports = router
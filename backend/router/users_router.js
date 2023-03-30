const ctrl = require("./users_ctrl")
const router = require("express").Router()

const {verifyToken} = require("../middleware/verifyToken")
const { uploads } = require("../middleware/multer")


// const _storage = multer.diskStorage({
//     destination : (req,file,cd)=>{
//         cd(null,"uploads/images")
//     },
//     filename : (req,file,cd)=>{
//         cd(null,file.originalname)
//     }
//     })
// const uploads  = multer({ storage : _storage})

router.post("/login",ctrl.post.login)

router.post("/register",ctrl.post.register)

router.get("/me",verifyToken,ctrl.post.getProfile)

router.get("/uploads",(req,res)=>{
    res.render("views/uploads")
})

router.post("/uploads",verifyToken,uploads.single("image"),ctrl.post.uploadPhoto)

module.exports = router
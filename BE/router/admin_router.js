const dotenv = require("dotenv")
const router = require("express").Router()

dotenv.config("../.env")


router.get("/",(req,res)=>{
    if(req.session.user){
        res.render("views/admin_page")
    }
    else{
        res.render("views/login_page")
    }
})

router.get("/login",(req,res)=>{
    const msg = {success : false, msg : "로그인 실패"}
            res.json(msg)
})

router.post("/login",(req,res)=>{
    const id = req.body.admin_id
    const password = req.body.admin_password

    if(req.session.user){
        // ????
    }
    else{
        if(id === process.env.ADMIN_ID && password === process.env.ADMIN_PASSWORD){
            req.session.user = {
                id : id,
                password : password,
                name : "admin",
                isLogin : true,
                SameSite : "none"
            }
        }
        else{
            console.log("로그인 실패")
        }
        res.redirect(302,"/admin")
    }
})

router.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect(302,"/admin")
})

module.exports = router
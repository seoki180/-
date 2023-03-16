const User = require("../src/model/User")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()



// dotenv.config("../.env")

const processes ={
    login :   async (req,res)=>{
        const user = new User(req.body)
        const result = await user.login()
        if(result.success){
            try{
                const id = req.body.id
                const token = jwt.sign({
                    id,
                },process.env.JWT_SECRET,{
                    expiresIn : '1h',
                    issuer : req.body.id
                })
                res.status(200).json({
                    code : 200,
                    result,
                    token
                })
            }
            catch(err){
                console.error(err)
                res.status(404).json({
                    code : 404,
                    msg : "서버에러"
                })
            }
        }
        else{
            res.status(403).json(result)
        }
    },

    register :  async (req,res) => {
        const user = new User(req.body)
        const result = await user.register()
        res.status(200).json(result)
    }
}

const page = {
    login : (req,res)=>{
        res.json(req.decoded)
    }
}

module.exports = {
    processes,
    page
}
const User = require("../src/model/User")
const token = require("../src/lib/token")

const post ={
    login :   async (req,res,next)=>{
        const user = new User(req.body)
        const result = await user.login()

        //TODO: 리팩토링 방법구상, 너무 코드가 더러움
        if(result.success){
            const accessToken = token.accessToken(req.body.id)
            const refreshToken = token.refreshToken(req.body.id)
            const jwt = {
                access : accessToken["token"],
                refresh : refreshToken["token"]
            }
            if(accessToken.success && refreshToken.success){
                res.status(200).json({
                    code : 200,
                    result,
                    jwt
                })
            }
            else{
                res.status(500).json({
                    code : 500,
                    msg : 'server error'
                })
            }
            
        }
        else{
            res.status(401).json({
                code : 401,
                result,
            })
        }
    },

    register :  async (req,res) => {
        const user = new User(req.body)
        const result = await user.register()
        if(result){
            res.status(200).json({
                code : 200,
                msg : "register success"
            })
        }
        else{
            res.status(401).json({
                code : 401,
                msg : "already exist id"
            })
        }
    },


    getProfile : async(req,res)=>{
        if(req.decoded){
            const id = req.decoded.id
            const data = await User.getInfoById(id)
            res.status(200).json({
                code : 200,
                data : data,
            })
        }
        else{
            res.status(410).json({code : 419})
        }
    },

    uploadPhoto : async(req,res)=>{
        const photo = req.file
        const user = req.decoded.id
        console.log(photo)
        await User.uploadPhoto(photo,user)

        res.send("ok")
    }

}


module.exports = {
    post
}
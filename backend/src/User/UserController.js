const UserService = require("./UserService")

const { errResponse,response } = require("../../config/response")
const baseResponse = require("../../config/baseResponse")

class UserController{
    static async profile(req,res){
        if(req.decoded){
            const idx = req.decoded.Idx
            const userInfo = await UserService.profleService(idx)
            const code = userInfo["code"]

            return res.status(code).json(userInfo)
        }
        //미들웨어 에서 걸러지니까 여긴 올 일이 없을듯..?
        return res.status(400).json(errResponse(baseResponse.USER_JWT_NOTDECODED)) 
    }

    static async upload(req,res){
        if(req.decoded){
            const idx = req.decoded.Idx
            const photo = req.file
            console.log(`${photo} and ${idx}`)
            return res.status(200).json(response(baseResponse.USER_UPLOAD_SUCCESS))
        }
        return res.status(400).json(errResponse(baseResponse.USER_JWT_INVAILD))
    }
}

module.exports = UserController
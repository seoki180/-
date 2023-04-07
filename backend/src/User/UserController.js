const UserService = require("./UserService")

const { errResponse } = require("../../config/response")
const baseResponse = require("../../config/baseResponse")

class UserController{
    static async profile(req,res){
        if(req.decoded){
            const idx = req.decoded.Idx
            const userInfo = await UserService.profleService(idx)
            return res.status(userInfo["code"]).json(userInfo)
        }
        //미들웨어 에서 걸러지니까 여긴 올 일이 없을듯..?
        return res.status(400).json(errResponse(baseResponse.USER_JWT_NOTDECODED)) 
        
    }
}

module.exports = UserController
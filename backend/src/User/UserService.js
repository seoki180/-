const baseResponse = require('../../config/baseResponse')
const { response,errResponse } = require('../../config/response')
const UserModel = require('./UserModel')

class UserService{
    static async profleService(idx){
        try{
            const userInfo = await UserModel.selectUserInfoQuery(idx)
            if(userInfo.length == 0){
                return errResponse(baseResponse.USER_PROFILE_ERROR)
            }
            return response(baseResponse.USER_PROFILE_SUCCESS,userInfo)

        }
        catch(err){
            return errResponse(baseResponse.DB_ERROR)
        }
    }

    static async uploadService(idx,photo){
        try{
            const upload = await UserModel.
        }
        catch(err){
            return errResponse(baseResponse.DB_ERROR)
        }
    }
}

module.exports = UserService
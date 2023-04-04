const AuthProvider = require("./AuthProvider")
const {response } = require("../../config/response")
const AuthModel = require("./AuthModel")
const token = require("../../config/token")
const hashing = require('../../config/cryptopy')
const baseResponse = require("../../config/baseRespone")


class AuthService{
    static async loginService(id,password){
        try{
            const loginUser = await AuthModel.selectUserInfoQuery(id)
            if(loginUser.length != 0){
                const hashingData = [
                    password,
                    loginUser[0].userSalt,
                    loginUser[0].userPassword,
                ]
                const verified = await hashing.verifyPassword(hashingData)
                if(verified){
                    const userName = loginUser[0].userName
                    const idx = loginUser[0].idx
                    const accessToken = token.accessToken(userName,idx,id)
                    const refreshToken = token.refreshToken(userName,idx,id)
                    
                    const jwt = {
                        access : accessToken,
                        refresh : refreshToken
                    }

                    return response(baseResponse.AUTH_LOGIN_SUCCESS,{jwt:jwt})
                }
                return baseResponse.AUTH_LOGIN_WRONGPASSWORD
            }
            return baseResponse.AUHT_LOGIN_NOSUCHID
        }
        catch(err){
            console.log(err)
            return baseResponse.DB_ERROR
        }
    }

    static async registerService(id,password,name){
        try{
            const registerUser = await AuthModel.selectUserInfoQuery(id)
            const checkUserName = await AuthModel.selectUserNameQuery(name)
            if(registerUser.length == 0){
                if(checkUserName.length == 0){
                    const {hashedPassword,userSalt} = await hashing.createHashedPassword(password)
                    const result = await AuthModel.insertUserInfoQuery(id,hashedPassword,userSalt,name)
                    if(result.length != 0){
                        return baseResponse.AUTH_REGISTER_SUCCESS
                    }
                    return baseResponse.AUTH_REGISTER_DBERROR
                }
                return baseResponse.AUTH_REGISTER_EXISTNAME
            } 
            return baseResponse.AUTH_REGISTER_EXISTID
        }
        catch(err){
            console.log(err)
            throw(err)
        }
    }


}

module.exports = AuthService
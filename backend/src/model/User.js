const UserStorage = require('./UserStorage')
const crypto = require("../../config/cryptopy")

class User{
    constructor(user){
        this.user = user
    }
    
    async login(){
        const client = this.user
        const userInfo =  await UserStorage.getUserInfoFromDB(client.id)

        if(userInfo){
            const cryptoData = [
                client.password,
                userInfo.userSalt,
                userInfo.userPassword
            ]
            const verified = await crypto.verifyPassword(cryptoData)
            if(verified){
                return {success : true, msg : "login success"}
            }
            return {success : false, msg : "wrong password"}
        }
        return {success : false, msg : "no such id"}
    }

    async register(){
        const client = this.user
        const userStorage =  await UserStorage.putUserInfoToDB(client)
        if(userStorage){
            return true
        }
        return false
    }

    static async getInfoById(userId){
        const data = await UserStorage.getUserData(userId)
        return data[0]
    }

    static async uploadPhoto(file,userId){
        const id = await UserStorage.getUniqueId(userId)
        await UserStorage.uploadPhotoDB(file,id)
    }
}

module.exports = User
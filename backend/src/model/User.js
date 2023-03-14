//define user aciton
const UserStorage = require('./UserStorage')
const crypto = require("../../config/cryptopy")

class User{
    constructor(user){
        this.user = user
    }

    async login(){
        const client = this.user
        const userStorage = await UserStorage.getUserInfoFromDB(client.id)
        if(userStorage){
            const verified = await crypto.verifyPassword(client.password,userStorage.userSalt,userStorage.userPassword)
            console.log(verified)
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
        return userStorage

    }

}

module.exports = User
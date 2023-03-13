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
        console.log(userStorage)
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
        
        const userStorage =  new UserStorage(client)
        if(await userStorage.checkIdDuplication(client.id)){
            return {success : false, msg : "id already exist"}
        }
        else{
            await userStorage.putUserInfoToDB(client)
            return {success : true, msg : "register success"}
        }
    }

}

module.exports = User
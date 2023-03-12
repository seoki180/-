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

        console.log(client)
        if(await UserStorage.checkIdDuplication(client.id)){//중복한다면 false , 아니라면 true
            const userStorage = await UserStorage.putUserInfoToDB(client)
            console.log(userStorage)
            return {success : true}
        } 
        return {success : false , msg : "id is already exist"}
    }
}

module.exports = User
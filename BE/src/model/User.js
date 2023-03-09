//define user aciton
const UserStorage = require('./UserStorage')

class User{
    constructor(user){
        this.user = user
    }

    async login(){
        const client = this.user
        const userStorage = await UserStorage.getUserInfoFromDB(client.id)
        if(userStorage){
            if(userStorage.userId === client.id && userStorage.userPasswd === client.passwd){
                return {success : true}
            }
            return {success : false, msg : "wrong password"}
        }
        return {success : false,msg : "no such id"}
    }

    async register(){
        const client = this.user
        if(await UserStorage.checkIdDuplication(client.id)){//중복한다면 false , 아니라면 true
            const userStorage = await UserStorage.putUserInfoToDB(client)
            return {success : true}
        }
        return {success : false}
    }
}

module.exports = User
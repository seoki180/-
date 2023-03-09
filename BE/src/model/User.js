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

    
}

module.exports = User
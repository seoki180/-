const db = require("../../config/database")

class UserStorage{
    constructor(user){
        this.id = user.id,
        this.passwd = user.passwd,
        this.name = user.name
    }   

    static async getUserInfoFromDB(userId){
        const sql = `select * from users where userId = '${userId}'`
        return new Promise((resolve,reject)=>{
            db.query(sql,(err,data)=>{
                if(err) throw err
                resolve(data[0])
            })
        })
    }
}

module.exports = UserStorage    
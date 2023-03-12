const db = require("../../config/database")
const crypto = require("../../config/cryptopy")

class UserStorage{
    constructor(user){
        this.id = user.id,
        this.password = user.password,
        this.name = user.name
    }   

    static  getUserInfoFromDB(userId){
        const sql = `select * from users where userId = '${userId}'`
        return new Promise((resolve,reject)=>{
            db.query(sql,(err,data)=>{
                if(err) throw err
                resolve(data[0])
            })
        })
    }

    static  checkIdDuplication(userId){
        const sql = `select * from users where userId = '${userId}'`
        return new Promise((resolve,reject)=>{
            db.query(sql,(err,data) => {
                if(err) throw err
                else{
                    if(data[0]) resolve(false)
                    else resolve(true)
                }
            })
        })
    }

    static  async putUserInfoToDB(user){
        const {
            hashedPassword,
            salt
        } = await crypto.createHashedPassword(user.password)
        const id = user.id
        const name = user.name

        console.log(id, name, hashedPassword, salt)
        const sql = `insert into users (userId, userPassword, userName,userSalt, signedDate) value("${id}","${hashedPassword}","${name}","${salt}",now())`
        return new Promise((resolve,reject)=>{
            db.query(sql,(err,data)=>{
                if(err) throw err
                resolve(data)
            })
        })

    }
}

module.exports = UserStorage    
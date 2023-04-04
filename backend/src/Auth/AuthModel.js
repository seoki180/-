const db = require("../../config/database")


class AuthModel{
    static async selectUserInfoQuery(userId){
        const sql = `select * from Users where userId = ?`
        return new Promise((resolve,reject)=>{
            db.query(sql,[userId],(err,data)=>{
                if(err) reject(err)
                else resolve(data)
            })
        })
    }

    static async insertUserInfoQuery(userId,hashedPassword,userSalt,userName){
        const sql = `insert into Users(userId,userPassword,userName,userSalt,signedDate) value(?,?,?,?,now())`

        return new Promise((resolve,reject)=>{
            db.query(sql,[userId,hashedPassword,userName,userSalt],(err,data)=>{
                if(err) reject(err)
                else resolve(data)
            })
        })
    }

    static async selectUserNameQuery(userName){
        const sql = `select userName from Users where userName = ?`

        return new Promise((resolve,reject)=>{
            db.query(sql,[userName],(err,data)=>{
                if(err) reject(err)
                else resolve(data)
            })
        })
    }
}

module.exports = AuthModel
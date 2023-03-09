const db = require("../../config/database")

class UserStorage{
    constructor(user){
        this.id = user.id,
        this.passwd = user.passwd,
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

    static  putUserInfoToDB(user){
        const id = user.id
        const password = user.passwd
        const name = user.name

        console.log(id,password,name)
        const sql = `insert into users (userId, userPasswd, userName,signedDate) value("${id}","${password}","${name}",now())`
        return new Promise((resolve,reject)=>{
            db.query(sql,(err,data)=>{
                if(err) throw err
                resolve(data)
            })
        })

    }
}

module.exports = UserStorage    
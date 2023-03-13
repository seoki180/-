const {stablishedConnection}  = require('../../config/database');
const crypto = require("../../config/cryptopy")


class UserStorage{
    constructor(user){
        this.id = user.id,
        this.password = user.password,
        this.name = user.name
    }   


    static  getUserInfoFromDB(userId){
        return new Promise((resolve,reject)=>{
            stablishedConnection()
            .then((db)=>{
                const sql = `select * from users where userId = '${userId}'`
                db.query(sql,(err,data)=>{
                    if(err) throw err
                    else{
                        resolve(data[0])
                    }
                })
            })
            .catch((err)=>{
                console.error(err)
            })
        })
    }

    checkIdDuplication(userId){
        return new Promise((resolve, reject) => {
            stablishedConnection()
            .then((db)=>{
                const sql = `select * from users where userId = '${userId}'`
                    db.query(sql,(err,data) => {
                        if(err) throw err
                        else{
                            console.log(data[0])
                            if(data[0] === undefined) resolve(false) //존재한다 - > 중복
                            else resolve(true) //존재하지 않는다 -> 아이디 생성 가능
                        }
                    })
                })
            })
            .catch((err)=>{
                console.error(err)
            })
        }
    

    async putUserInfoToDB(user){
        return new Promise((resolve,reject)=>{
            stablishedConnection()
            .then( async (db)=>{
                const {
                    hashedPassword,
                    salt
                } =  await crypto.createHashedPassword(user.password)
                const id = user.id
                const name = user.name
        
                console.log(id, name, hashedPassword, salt)
                
                const sql = `insert into users (userId, userPassword, userName,userSalt, signedDate) value("${id}","${hashedPassword}","${name}","${salt}",now())`
                    db.query(sql,(err,data)=>{
                        if(err) throw err
                        resolve(data)
                    })
            })
            .catch((err)=>{
                console.error(err)
            })
        })
    }
}

module.exports = UserStorage    
const {stablishedConnection}  = require('../../config/database');
const crypto = require("../../config/cryptopy")


class UserStorage{
    constructor(user){
        this._id = user.id,
        this._password = user.password,
        this._name = user.name
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

    static isIdDuplicated(userId){
        return new Promise((resolve, reject) => {
            stablishedConnection()
            .then((db)=>{
                const sql = `select userId from users where userId = '${userId}'`
                    db.query(sql,(err,data) => {
                        if(err) throw err
                        else{
                            console.log(data[0])
                            if(data[0] === undefined) resolve(false)
                            else resolve(true)
                        }
                    })
                })
            })
            .catch((err)=>{
                console.error(err)
            })
        }
    

    static async putUserInfoToDB(user){
        return new Promise((resolve,reject)=>{
            stablishedConnection()
            .then( async (db)=>{
                if(!await this.isIdDuplicated(user.id)){
                    const {
                        hashedPassword,
                        salt
                    } =  await crypto.createHashedPassword(user.password)
                    const id = user.id
                    const name = user.name
                    
                    const sql = `insert into users (userId, userPassword, userName,userSalt, signedDate) value("${id}","${hashedPassword}","${name}","${salt}",now())`
                        db.query(sql,(err,data)=>{
                            if(err) throw err
                            else{
                                resolve({
                                    success : true,
                                    msg : "register success"
                                })
                            }
                        })
                }
                else{
                    resolve({
                        success : false,
                        msg : "id already exist"
                    })
                }
            })
            .catch((err)=>{
                console.error(err)
            })
        })
    }
}

module.exports = UserStorage    
const db = require("../../config/database")
const crypto = require("../../config/cryptopy")


class UserStorage{
    static  getUserInfoFromDB(userId){
        const sql = `select * from Users where userId = '${userId}'`
        return new Promise((resolve,reject)=>{
            try{
                db.query(sql,(err,data)=>{
                    if(err) throw err
                    else resolve(data[0])
                })
            }
            catch(err){
                console.error()
            }
        })
    }

    static isIdDuplicated(userId){
        const sql = `select userId from Users where userId = "${userId}"`
        return new Promise((resolve,reject)=>{
            try{
                db.query(sql,(err,data)=>{
                    if(err) reject(err)
                    if(data.length === 0){
                        resolve(false)
                    }
                    else{
                        resolve(true)
                    }
                })
            }
            catch(err){
                console.error()
            }
        })
    }
    

    static async putUserInfoToDB(user){
        return new Promise(async (resolve,reject)=>{
            const check = await this.isIdDuplicated(user.id)

            if(!check){
                const {
                    hashedPassword,
                    salt
                } = await crypto.createHashedPassword(user.password)
                const id = user.id
                const name = user.name  
                const sql = `insert into Users (userId, userPassword, userName, userSalt, signedDate) value("${id}", '${hashedPassword}','${name}','${salt}',now())`

                try{
                    db.query(sql,(err,data)=>{
                        if(err) reject(err)
                        else resolve(true)
                    })
                }
                catch(err){
                    console.error()
                }
            }
            else{
                resolve(false)
            }
        })
    }
    
//     return new Promise((resolve,reject)=>{
//         stablishedConnection()
//         .then( async (db)=>{
//             if(!await this.isIdDuplicated(user.id)){
//                 const {
//                     hashedPassword,
//                     salt
//                 } =  await crypto.createHashedPassword(user.password)
//                 const id = user.id
//                 const name = user.name
//                 const sql = `insert into users (userId, userPassword, userName,userSalt, signedDate) value("${id}","${hashedPassword}","${name}","${salt}",now())`
//                 db.query(sql,(err,data)=>{
//                     if(err) reject(err)
//                     else{
//                         resolve(true)
//                     }
//                 })
//             }
//             else{
//                 resolve(false)
//             }
//         })
//         .catch((err)=>{
//             console.error(err)
//         })
//     })
// }
}
module.exports = UserStorage    
const db =require("../../config/database")

class UserModel{
    static async selectUserInfoQuery(idx){
        const sql = `select Idx,userName,userId,signedDate,userProfile from Users where idx = ?`

        return new Promise((resolve,reject)=>{
            db.query(sql,[idx],(err,data)=>{
                if(err) reject(err)
                else resolve(data)
            })
        })
    }
}

module.exports = UserModel
const db = require("../../config/database")


class PhotoStorage{
    static async getPhotoUrl(id){
        const sql = `select photoUrl from Photos where user_id = ${id}`
        return new Promise((resolve,reject)=>{
            db.query(sql,(err,data)=>{
                if(err)reject(err)
                else{resolve(data)}
            })
        })
    }
}

module.exports = PhotoStorage
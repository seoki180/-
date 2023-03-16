const jwt = require("jsonwebtoken")

module.exports ={
    decodeToken : (token) =>{
        return new Promise((resolve,reject) => {
            jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
                if(err) throw err
                else resolve(decoded)
            })
        })
    }
}
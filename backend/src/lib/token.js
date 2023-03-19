const jwt = require("jsonwebtoken")

module.exports ={
    decodeToken : (token) =>{
        return new Promise((resolve,reject) => {
            jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
                if(err) throw err
                else resolve(decoded)
            })
        })
    },

    signToken : (userId)=>{
        try{
            const id = userId
            const token = jwt.sign({
                id,
            },process.env.JWT_SECRET,{
                expiresIn : '1m',
                issuer : userId,
            })
            console.log(token)
            return true
        }
        catch(err){
            console.error(err)
            return false
        }
    }   
}
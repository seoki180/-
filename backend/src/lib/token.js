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

    accessToken : (userId)=>{
        try{
            const id = userId
            const token = jwt.sign({
                id,
            },process.env.JWT_SECRET,{
                expiresIn : '30m',
                issuer : userId,
            })
            console.log(token)
            return {
                success : true,
                token : token
            }
        }
        catch(err){
            console.error(err)
            return{
                success : false
            }
        }
    },

    refreshToken : (userId)=>{
        try{
            const id = userId
            const token = jwt.sign({
                id,
            },process.env.JWT_REFRESH,{
                expiresIn : '180d',
                issuer : userId,
            })
            console.log(token)
            return {
                success : true,
                token : token,
            }
        }
        catch(err){
            console.error(err)
            return {
                success : false
            }
        }
    }
}
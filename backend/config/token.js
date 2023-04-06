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

    accessToken : (userName,idx,userId)=>{
        try{
            const id = userId
            return token = jwt.sign({
                Idx : idx,
                userName : userName,
                userId : userId
            },
            process.env.JWT_SECRET,
            {
                issuer : userName,
                expiresIn : '6h',
            })

        }
        catch(err){
            throw err
        }
    },

    refreshToken : (userName,idx,userId)=>{
        try{
            const id = userId
            return token = jwt.sign({
                Idx : idx,
                userName : userName,
                userId : userId
            },
            process.env.JWT_REFRESH,
            {
                issuer : userName,
                expiresIn : '365d',
            })
        }
        catch(err){
            throw(err)
        }
    },
}
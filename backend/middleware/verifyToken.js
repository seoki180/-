const dotenv = require("dotenv")
const token = require("../src/lib/token")
const jwt = require("jsonwebtoken")
dotenv.config("../.env")

exports.verifyToken = async (req,res,next)=>{
    try{
        const decoded = await token.decodeToken(req.headers.authorization)
        console.log(decoded)
        req.decoded = decoded
        return next()
    }
    catch(err){
        if (err.name === 'TokenExpiredError') {
            return res.status(419).json({
                code: 419,
                message: err.name
            });
        }
        else{
            return res.status(401).json({
            code: 401,
            message: err.name
            })
        }
    }
}




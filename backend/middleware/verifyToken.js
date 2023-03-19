const dotenv = require("dotenv")
const token = require("../src/lib/token")
const jwt = require("jsonwebtoken")
dotenv.config("../.env")

exports.verifyToken = async (req,res,next)=>{
    try{
        const decoded = await token.decodeToken(req.headers.authorization)
        req.decoded = decoded
        return next()
    }
    catch(err){
        if (err.name === 'TokenExpiredError') {
            // req.decode = {
            //     code : 419,
            //     msg : err.name,
            // }
            // return next()
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




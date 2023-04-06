// const dotenv = require("dotenv")
const token = require("../src/lib/token")
// const jwt = require("jsonwebtoken")
// dotenv.config("../.env")
const baseRespone = require("../config/baseRespone")
const { errResponse } = require("../config/response")

exports.verifyToken = async (req,res,next)=>{
    try{
        const decoded = await token.decodeToken(req.headers.authorization)
        req.decoded = decoded
        return next()
    }
    catch(err){
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json(errResponse(baseRespone.USER_JWT_EXPIRED));
        }
        else{
            return res.status(401).json(errResponse(baseRespone.USER_JWT_INVAILD))
        }
    }
}




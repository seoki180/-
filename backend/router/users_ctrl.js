const User = require("../src/model/User")
const token = require("../src/lib/token")


const post ={
    login :   async (req,res,next)=>{
        const user = new User(req.body)
        const result = await user.login()

        //TODO: 리팩토링 방법구상, 너무 코드가 더러움
        if(result.success){
            if(token.signToken(req.body.id)){
                res.status(200).json({
                    code : 200,
                    result,
                })
            }
            else{
                res.status(500).json({
                    code : 500,
                    msg : 'server error'
                })
            }
            
        }
        else{
            res.status(401).json({
                code : 401,
                result,
            })
        }
    },

    register :  async (req,res) => {
        const user = new User(req.body)
        const result = await user.register()
        res.status(200).json(result)
    }
}

const page = {
    
    login : (req,res)=>{
        if(req.decoded){
            console.log('verify')
        }
        else{
            console.log("no")
        }
        res.json(req.decoded)
    }
}

module.exports = {
    post,
    page
}
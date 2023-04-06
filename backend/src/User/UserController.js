class UserController{
    static profile(req,res){
        if(req.decoded){
            
            return res.send("ok")
        }
        return res.send("no")
    }
}

module.exports = UserController
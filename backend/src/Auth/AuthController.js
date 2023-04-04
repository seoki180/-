const AuthService = require("./AuthService")

class AuthController{
    static async login(req,res){
        const {
            id,
            password,
        } = req.body

        const loginResponse = await AuthService.loginService(id,password)
        return res.json(loginResponse)
    }

    static async register(req,res){
        const{
            id,
            password,
            name,
        } = req.body

        const registerResponse = await AuthService.registerService(id,password,name)
        return res.json(registerResponse)
    }


}


module.exports = AuthController
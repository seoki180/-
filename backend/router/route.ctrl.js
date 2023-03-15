const User = require("../src/model/User")

const process ={
    login :   async (req,res)=>{
        const user = new User(req.body)
        const result = await user.login()
        res.status(200).json(result)
    },

    register :  async (req,res) => {
        const user = new User(req.body)
        const result = await user.register()
        res.status(200).json(result)
    }



}

module.exports = {
    process,
}
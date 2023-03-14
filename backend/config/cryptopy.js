const crypto = require("crypto")
const util  = require("util")

const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

async function createSalt(){
    const buf  = await randomBytesPromise(64)
    return buf.toString("base64")
}


module.exports = {

    async createHashedPassword(password) {
        const salt = await createSalt()
        const key = await pbkdf2Promise(password,salt,99999,64,"sha512")
        const hashedPassword = key.toString("base64")
    
        return { hashedPassword,salt}
    },
    
    async verifyPassword(password,userSalt,userPassword){
        const key = await pbkdf2Promise(password,userSalt,99999,64,"sha512")
        const hashedPassword = key.toString("base64")
    
        if(hashedPassword === userPassword) return true
        return false
    }
}

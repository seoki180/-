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
        const userSalt = await createSalt()
        const key = await pbkdf2Promise(password,userSalt,99999,64,"sha512")
        const hashedPassword = key.toString("base64")
    
        return { hashedPassword,userSalt}
    },
    
    async verifyPassword(cryptoData){
        
        const key = await pbkdf2Promise(cryptoData[0],cryptoData[1],99999,64,"sha512")
        const hashedPassword = key.toString("base64")
    
        if(hashedPassword === cryptoData[2]) return true
        return false
    }
}

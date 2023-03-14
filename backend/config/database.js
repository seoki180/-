const dotenv = require("dotenv")
const db = require("mysql2")
dotenv.config("../.env")


const pool = db.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE, 
})

module.exports.stablishedConnection = () => {
    return new Promise((resolve,reject)=>{
        pool.getConnection((err)=>{
            if(err){
                switch(err.code){
                    case "PROTOCOL_CONNECTION_LOST":
                        console.error("Database connection was closed.");
                        break;
                    case "ER_CON_COUNT_ERROR":
                        console.error("Database has too many connections.");
                        break;
                    case "ECONNREFUSED":
                        console.error("Database connection was refused.");
                        break;
                }
            }
            else resolve(pool)
        })
    })
}
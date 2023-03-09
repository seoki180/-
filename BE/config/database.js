const dotenv = require("dotenv")
const db = require("mysql2")
dotenv.config("../.env")

const database = db.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
})

module.exports = database
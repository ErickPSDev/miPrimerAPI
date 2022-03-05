// importamos mongoose
const mongoose = require('mongoose')

//cuando se decalara una variable van las comillas simples
//const DB_USER = process.env.DB_USER
//const DB_PASSWORD = process.env.DB_PASSWORD
//const DB_HOST = process.env.DB_HOST
//const DB_NAME = process.env.DB_NAME

//destructuring
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () { 
    return mongoose.connect(URL) //Connect genera un apromesa
}

module.exports = connect
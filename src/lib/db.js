// importamos mongoose
const mongoose = require('mongoose')

//cuando se decalara una variable van las comillas simples
const DB_USER = 'erixdev'
const DB_PASSWORD = 'mongopass'
const DB_HOST = 'kodemia.ku7dw.mongodb.net'
const DB_NAME = 'kodemia'

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () { 
    return mongoose.connect(URL) //Connect genera un apromesa
}

module.exports = connect
// Guardara la definicio del servidor
// Configurar los Middlewares
// Montar los routers
const express = require ('express')
const kodersRouter = require('./routers/koders')

const server = express()

// Middlewares

server.use(express.json()) //gregar middleware para que transforme body en un obejto javascript


// Routers
server.use ('/koders', kodersRouter)


module.exports = server

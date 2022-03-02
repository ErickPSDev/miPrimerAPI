// Guardara la definicio del servidor
// Configurar los Middlewares
// Montar los routers
const express = require ('express')
const kodersRouter = require('./routers/koders')

const server = express()

// Middlewares



// Routers
server.use ('/koders', kodersRouter)

module.exports = server
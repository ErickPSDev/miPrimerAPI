
require('dotenv').config()
const server = require('./src/server')
const dbConnect = require('./src/lib/db')

const PORT = process.env.PORT || 8080


dbConnect()
    .then(() => {
        console.log('Database connected')
        server.listen(PORT, () => {
            console.log('Server running on port 8080')
        })
    })
    .catch ((error) => {
        console.log('Error: ', error)
    })

//GET /koders
/*
1 - Create (asegurarme que exista) EL MODELO NECESARIO
2 - Crear el caso de uso necesario (userCases/)
3 - Crear el endpoint (routers/

    //PRACTICA
    POST /koders
    PATCH /koders/:id
    DELETE /koders:id
    GET /koders:id
    

    response: token
*/

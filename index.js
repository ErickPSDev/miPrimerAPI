const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
    .then(() => {
        console.log('Database connected')
        server.listen(8080, () => {
            console.log('Server running on port 8080')
        })
    })
    .catch((error) => {
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
    
*/

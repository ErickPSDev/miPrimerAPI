
const Koder = require('../models/koders')
//Endpoint -> caso de uso -> modelos

function getAll() { // Metodo para obtener todos los codes
    return Koder.find({}) // Promesa
}


module.exports = { 
    getAll
}


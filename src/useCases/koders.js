
const Koder = require('../models/koders')
//Endpoint -> caso de uso -> modelos

function getAll() { // Metodo para obtener todos los codes
    return Koder.find({}) // Promesa
}

// function create (dataKoder) {
//     //crear un koder en la BD


//     const idKoder = 
// }

function patch (idKoder, dataKoder) {
// Parcha un iD en la BD
    return Koder.findByIdAndUpdate (idKoder, dataKoder)
}

module.exports = { 
    getAll,
    //create,
    patch
}



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


// Get by id
function getById(idKoder) {
    return Koder.findById(idKoder);
  }
module.exports = { 
    getAll,
    //create,
    patch
}


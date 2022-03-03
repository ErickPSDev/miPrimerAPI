const User = require('../models/users') //La primer letra mayusucla hace referncia a que es un modelo.

function getAll (){
    return User.find({})
}

async function signUp (dataUser){ // aqui estamos creado nuestro caso de uso, que es async
    //name, email passord en users / models

    //Se valida que no exista un usuario con el email

    //Descontructuramos

    const {email, password, name} = dataUser

    const userFound = await User.findOne({email: email}) //criterio de busqueda

    if (userFound) throw new Error ('User already exists')

    // Si validación exitosa, encriptaremos el password.

    return User.create ({name, email, password})
}

module.exports = {
    getAll,
    signUp
}
const User = require('../models/users') //La primer letra mayusucla hace referncia a que es un modelo.
const bcrypt = require ('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll (){
    return User.find({})
}

async function signUp (dataUser){ // aqui estamos creado nuestro caso de uso, que es async
    //name, email passord en users / models
    //Se valida que no exista un usuario con el email
    //Descontructuramos

    const {email, password, name} = dataUser

    const userFound = await User.findOne({email}) //criterio de busqueda - objeto {name, password, email}
    // si no lo encuentra manda undefined.

    if (userFound) throw new Error('User already exists')

    // Si validación exitosa, encriptaremos el password.
    const passwordEncrypted = await bcrypt.hash(password)

    return User.create ({name, email, password: passwordEncrypted}) //encriptamos el password con password: passwordEncrypted con Hash

}

async function login (email, password) {

    const userFound = await User.findOne({email})

    if (!userFound) throw new Error ('Invalid Credentials')

   const isValidPassword = await bcrypt.compare(password, userFound.password)

   if(!isValidPassword) throw Error('Invalid Credentials *')
  
   //regresa token
   return jwt.sign({id: userFound._id})
   
}

module.exports = {
    getAll,
    signUp,
    login
}
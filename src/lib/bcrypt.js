const bcrypt = require ('bcrypt')

const saltRounds = 10

function hash () {
    return bcrypt.hash(plainText, saltRounds)
}

module.exports = {
    ...bcrypt,
    hash
}


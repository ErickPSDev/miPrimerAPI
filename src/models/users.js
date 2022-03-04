const mongoose = require('mongoose')


const useSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/ // \.scape del punto para que valide el punto y no lo tome como un algo, que e sun punto normal (. )
    },
    password: {
        type: String,
        required: true,
    }
})

//regex o expresion regular -> Tema enorme pero genial, para validar cualquier tipo de dato.

const model = mongoose.model ('users', useSchema)

module.exports = model


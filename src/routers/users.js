const express = require('express')
const useCases = require('../useCases/users')

const router = express.Router()

router.post('/signup', async (request, response) => {
    try{
        const userData = request.body
        const userCreated = await useCases.signUp(userData)

        response.json({
            sucess:true,
            message: 'User Created',
            data: {
                user: userCreated,
            }
        })

    } catch(error) {
        response.status(400)
        response.json ({
            access: false,
            message: 'Could not register',
            error: error.message
        })
    }
})


router.post('/login', async (request, response) => {
    try {
        const {email, password} = request.body
        const token = await useCases.login(email, password)

        response.json({
            sucess:true,
            message: 'User Logged In',
            data: {
                token
            }
        })

    } catch(error) {
        response.status(400)
        response.json ({
            access: false,
            message: 'Could not register',
            error: error.message
        })
    }
})
module.exports = router

const express = require ('express') // importamos reouter
const useCasesKoders = require('../useCases/koders')

const router = express.Router() 

router.get('/', async (request, response) => { // se ace callback con async
    try {
        const allKoders = await useCasesKoders.getAll()

        response.json ({
            success: true,
            message: 'All Koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error) { 
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
})

module.exports = router

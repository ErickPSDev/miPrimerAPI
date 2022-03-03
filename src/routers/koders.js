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

router.get("/:id", async (request, response) => {
    try {
      const idKoder = request.params.id;
      const koderFound = await useCasesKoders.getById(idKoder);
  
      if (!koderFound) throw new Error("Koder not found");
      response.json({
        success: true,
        message: "koder found",
        data: {
          koder: koderFound,
        },
      });
    } catch (error) {
      response.status(404);
      response.json({
        success: false,
        message: "Koder not found",
        error: error.message,
      });
    }
  });


router.post('/', async (request, response) => {
    try{
        const koderToCreate = request.body
        const koderCrated = await useCasesKoders.create(koderToCreate)

        response.json({
            success: true,
            message: 'Koder created',
            data: {
                koder: koderCreated
            }
        })  

    } catch (error){
        response.status(400)
        response.json ({
            success: false,
            message: 'Error at create a koder',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try{
    const idKoder = request.params.id
    const dataToUpdate = request.body
    const koders = await useCasesKoders.patch (idKoder, dataToUpdate, {new: true}) // Esto es lo que vamos a actualizar, 
    if (!koders) throw new Error("koder not found");
    response.json({
      succes: true,
      data: {
        koders: koders,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      succes: false,
      message: error.message,
    })
  }
})


module.exports = router

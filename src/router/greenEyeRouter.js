const  router  = require("express").Router()
const { createPoll, getNotification, getPollById, reply, deletePoll } = require("../controllers/greenEyeController")
const { onlyCommanders, onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares")

router.post('/',onlyCommanders, createPoll)

router.get('/my',onlySoldiersAndCommanders, getNotification)

router.get('/:id',onlyCommanders, getPollById)

router.post('/reply',onlySoldiersAndCommanders, reply)

router.delete('/:id',onlyCommanders, deletePoll)



module.exports =  router


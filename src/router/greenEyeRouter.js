const  router  = require("express").Router()
const { createPoll, getNotification, getPollById, reply, deletePoll } = require("../controllers/greenEyeController")

router.post('/', createPoll)

router.get('/my', getNotification)

router.get('/:id', getPollById)

router.post('/reply', reply)

router.delete('/:id', deletePoll)



module.exports =  router


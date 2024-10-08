const  router  = require("express").Router()
const { createPoll, getNotification, getPollById, reply, deletePoll } = require("../controllers/greenEyeController")
const { onlyCommanders, onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares")
/**
 * @swagger
 * /greenEye:
 *   post:
 *     summary: Create poll.
 *     description: Create poll.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router.post('/',onlyCommanders, createPoll)

/**
 * @swagger
 * /greenEye/my:
 *   get:
 *     summary: Get Notification.
 *     description: Get Notification.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.get('/my',onlySoldiersAndCommanders, getNotification)

/**
 * @swagger
 * /greenEye/:id:
 *   get:
 *     summary: Get poll by id.
 *     description: Get poll by id.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.get('/:id',onlyCommanders, getPollById)

/**
 * @swagger
 * /greenEye/reply:
 *   post:
 *     summary: Reply to poll.
 *     description: Reply to poll.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.post('/reply',onlySoldiersAndCommanders, reply)

/**
 * @swagger
 * /greenEye/:id:
 *   delete:
 *     summary: Delete poll.
 *     description: Delete poll.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.delete('/:id',onlyCommanders, deletePoll)



module.exports =  router


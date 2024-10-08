const  router  = require("express").Router()

const {login,logout} = require("../controllers/authController")
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares")
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login to the system.
 *     description: Login to the system.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 description: The name of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *     example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router.post('/login', login)

/**
 * @swagger
 * /auth/logout:
 *   delete:
 *     summary: Logout from system.
 *     description: Logout from system.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.delete('/logout', onlySoldiersAndCommanders, logout)



module.exports =  router


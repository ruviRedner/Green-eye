const  router  = require("express").Router()
const { register, getProfile, setSetting } = require("../controllers/userController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares")
/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register to the system.
 *     description: Register to the system.
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
 *     examples:
 *       example1:
 *         summary: Example user data
 *         value:
 *           user_name: "john_doe"
 *           password: "password123"
 *     responses:
 *       '201':
 *         description: User registered successfully.
 *       '400':
 *         description: Bad request.
 *       '500':
 *         description: Internal server error.
 */

router.post("/register",register)

/**
 * @swagger
 * /user/profile:
 *   get:
 *     summary: Get user profile.
 *     description: Get user profile.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.get("/profile", onlySoldiersAndCommanders, getProfile)

/**
 * @swagger
 * /user/setting:
 *   patch:
 *     summary: Updata setting.
 *     description: Update setting.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.patch("/setting",onlySoldiersAndCommanders, setSetting)


module.exports =  router
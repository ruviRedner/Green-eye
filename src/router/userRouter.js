const  router  = require("express").Router()
const { register, getProfile, setSetting } = require("../controllers/userController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares")

router.post("/register",register)

router.get("/profile", onlySoldiersAndCommanders, getProfile)

router.patch("/setting",onlySoldiersAndCommanders, setSetting)


module.exports =  router
const  router  = require("express").Router()
const { register, getProfile, setSetting } = require("../controllers/userController");

router.post("/register",register)

router.get("/profile",getProfile)

router.patch("/setting",setSetting)


module.exports =  router
const { createUser, getProfileUser } = require("../services/userService")

const register = async(req,res)=>{
  try {
   await createUser(req.body)
    res.status(201).json({
        message: "User created successfully"
    })
    
  } catch (error) {
    res.status(400).json(error.message)
  }}


const getProfile = async(req,res)=>{
    try {
      const userProfile = await getProfileUser()
      res.status(200).json({
        message: "user profile getting successfully",
        data: userProfile
      })
    } catch (error) {
      res.status(400).json(error.message)
    }}


const setSetting = async(req,res)=>{
    try {
          
    } catch (error) {
          
    }}


module.exports = {
    register,
    getProfile,
    setSetting
    }
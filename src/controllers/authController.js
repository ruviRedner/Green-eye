const {login:loginFromService} = require("../services/authService")
const login = async(req,res)=>{
    try {
      const token = await loginFromService(req.body)
      res.cookie("token", token)
      res.status(200).json({message: `${req.body.user_name} so good to see you`})
    } catch (error) {
      console.log(error.message);
    }}
  
  
  const logout = async(req,res)=>{
      try {
        res.clearCookie("token");
        res.status(200).json({message: "You are logged out"})
      } catch (error) {
        res.status(500).json({message: "Something went wrong"});
      }}
  
  
  
  module.exports = {
      login,
      logout,
      }
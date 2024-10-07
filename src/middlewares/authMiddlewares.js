const jwt = require('jsonwebtoken')
const onlyCommanders = async(req,res,next)=>{
    try {
         //get the token from the cookie
       const token = req.cookies.token
       //verify
       const userData = await jwt.verify(token, process.env.TOKEN_SECRET)
       if(userData.roll !== "commander"){
        return res.status(403).json({msg: 'You are not a commander'})
       }
       //add the user to the req objekt
       req.user = userData
       //next 
       next()
    } catch (error) {
        console.log(error.message);
        res.status(401).json({msg: 'Token is not valid'})
    }

}
const onlySoldiersAndCommanders = async(req,res,next)=>{
    try {
       //get the token from the cookie
       const token = req.cookies.token
       //verify
       const userData = await jwt.verify(token, process.env.TOKEN_SECRET)
       //add the user to the req objekt
       req.user = userData
       //next 
       next()
    } catch (error) {
        console.log(error.message);
        res.status(401).json({msg: 'Token is not valid'})
        
    }

}

module.exports = {
  onlyCommanders,
  onlySoldiersAndCommanders
}
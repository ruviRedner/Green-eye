const bcrypt = require("bcrypt")
const { UserModel } = require('../models/userModel')

// Function to create a new user in the database
const createUser = async(user)=>{
    try {
       const{user_name,password,roll,area,units} = user
       const hashPassword = await bcrypt.hash(password,10)
       const dbUser = new UserModel({
        user_name,
        password:hashPassword,
        roll,
        area,
        units
    });
    await dbUser.save()
         
    } catch (error) {
        throw error;
        
    }
}
//founction to get profile user
const getProfileUser = async () => {
    try {
        const dbUser = await  UserModel.findOne({user_name:req.user.user_name});
        if(!dbUser) {
            throw new Error("User not found")
        }
        return dbUser
    } catch (error) {
        console.log(error.message);
        
    }
}


module.exports = {
    createUser,
    getProfileUser
}
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







module.exports = {
    createUser,
    getProfileUser,
}
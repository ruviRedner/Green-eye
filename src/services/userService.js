const bcrypt = require('bcrypt')
const { UserModel } = require('../models/userModel')
const createUser = async(user)=>{
    try {
       const{user_name,password,role,area,units} = user
       const hashPassword = await bcrypt.hash(password)
       const dbUser = new UserModel({
        user_name,
        password:hashPassword,
        role,
        area,
        units
    });
    await dbUser.save()
         
    } catch (error) {
        throw error;
        
    }
}

module.exports = {
    createUser
}
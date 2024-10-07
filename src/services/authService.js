const bcrypt = require('bcrypt')
const { UserModel } = require("../models/userModel")
const jwt = require('jsonwebtoken')

const login = async (user) => {
    try {
        const dbUser = await UserModel.findOne({user_name: user.user_name})
        if(!dbUser) {
            throw new Error("User not found")
        }
        const match = await bcrypt.compare(user.password, dbUser.password)
        if(!match) {
            throw new Error("Invalid password")
        }
        const token = jwt.sign({
            user_name:dbUser.user_name,
            roll:dbUser.roll,
            id:dbUser._id,
        },process.env.TOKEN_SECRET,{
            expiresIn: '3m',
        });
        return token

    } catch (error) {
        console.log(error.message);
        throw error 
    }
}

module.exports = {
    login,
}
const mongoose = require('mongoose')

const userSechma = new mongoose.Schema({
    user_name : {type: String,required: [true,"user name is requierd"],minlength:[5,"way too short name"]},
    password: {type: String,required: [true,"password must be provided"]},
    roll:{ type:String, enum:["soldier","commander"],required: [true,"please provide a roll"]},
    

})



const UserModel = mongoose.model("user", userSechma)
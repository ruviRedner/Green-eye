const mongoose = require('mongoose')

const userSechma = new mongoose.Schema({
    user_name :{
        type: String,
        required: [true,"user name is requierd"],
        minlength:[5,"way too short name"]},
    password:{
        type: String,
        required: [true,"password must be provided"]},
    roll:{
         type:String,
          enum:["soldier","commander"],
          required: [true,"please provide a roll"]},
    area:{
        type:String,
        enum:["center","south","east","west","north"],
        required: [true,"please provide an area"]},
    units:{
        type:[Number],
        required:[true,"please specify a unit"]},
});

const UserModel = mongoose.model("user", userSechma)

module.exports = {
    UserModel,
    userSechma
};
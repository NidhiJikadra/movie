const mongoose = require("mongoose")

const userschema  = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
})

const Users = mongoose.model("Users",userschema)

module.exports = Users
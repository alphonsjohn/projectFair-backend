const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String
    },
    linkedlin:{
        type:String,

    },
    profilePic:{
        type:String
    },
})

//model creation //exact same as mongodb collection

const users = mongoose.model('users',userSchema)

module.exports=users
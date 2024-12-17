
const mongoose = require('mongoose')

const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

//register logic
exports.registerAPI = async (req, res) => {
    console.log("Inside register API")
    const { username, email, password } = req.body
    // if user already in db
    const existingUser = await users.findOne({ email })
    if (existingUser) {
        res.status(402).json({ message: "user already exists.." })
    }
    else {
        const newUser = new users({
            username: username,
            email: email,
            password: password,
            github: "",
            linkedlin: "",
            profilePic: ""
        })
        await newUser.save()
        res.status(200).json("user registeration sucessful")
    }
}
exports.loginAPI = async (req, res) => {
    console.log("Inside login API");
    const { email, password } = req.body;

    try{
    const existingUser = await users.findOne({ email,password });
    if (existingUser) {
        
        const token = jwt.sign({userId:existingUser._id},process.env.jwtkey)
        console.log(token)
        res.status(200).json({ currentUser:existingUser,token });
    }
    else{
         res.status(404).json("incorrect email or password");
    }}

    catch{
            res.status(401).json(err)
    }


};


//

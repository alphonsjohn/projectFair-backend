//1 import mongoose
const mongoose = require('mongoose')

//2 get connectionString
const connectionString = process.env.connectionString

//3 define connection
mongoose.connect(connectionString).then(res=>{
    console.log("proFair connected with mongoDB")
}).catch(err=>{
    console.log("error",+err);
    
})
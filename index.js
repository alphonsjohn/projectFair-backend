//backend creation using express

//1 Load .env file
require('dotenv').config()  //Loads .env file contents into process.env by default.

//2 import express
const express = require('express')

//6 import cors
const cors = require('cors')

//8 import db
const db = require('./DB/connection')
const router = require('./Routes/router')
// const ApplicationMiddleware = require('./Middlewares/ApplicationMiddleWares')

//3 create an application using express
const proFair = express()

//7 middleware configuration
proFair.use(cors()) 
proFair.use(express.json())
// proFair.use(ApplicationMiddleware)
proFair.use(router)
//export image to frontend
proFair.use('/uploads',express.static('./uploads'))

//4 PORT creation
const PORT = 4000 || process.env.PORT


//5 server run
proFair.listen(PORT, () => {
    console.log("proFair running on PORT " + PORT)
  })

//
proFair.get('/', (req, res) => {
    res.send("welcome to project fair bakend")
  })

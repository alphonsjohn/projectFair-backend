//1
const express =  require('express')

//2 create router 
const router = express.Router()

//3 import usercontrol 
const usercontroller = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const projectController = require('../Controllers/projectController')
const multerMiddleware = require('../Middlewares/multerMiddleware')

router.post('/api/register',usercontroller.registerAPI)

router.post('/api/login',usercontroller.loginAPI)

router.post('/api/addProjectAPI', jwtMiddleware, multerMiddleware.single('projectImg'), projectController.addProjectAPI);

router.get('/api/getAllProjects', jwtMiddleware,projectController.getAllUserProject)

router.get('/api/getAProjects', jwtMiddleware,projectController.getUserProject)

router.get('/api/getHomeProjects',projectController.getHomeProject)

router.put('/api/editProjectAPI/:projectId', jwtMiddleware, multerMiddleware.single('projectImg'), projectController.editProjectAPI);

router.delete('/api/deleteProject/:projectId', jwtMiddleware, projectController.deleteProjectAPI)

module.exports = router
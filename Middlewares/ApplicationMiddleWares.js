const ApplicationMiddleware = (req,res,next)=>{
    console.log("Inside ApplicationMiddleware")
    next()
}
module.exports =ApplicationMiddleware
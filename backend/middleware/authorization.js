const jwt=require('jsonwebtoken')
require('dotenv')
const secret=process.env.SECRET

const verifyToken= async (req,res,next)=>{
    try{
        //console.log(req.headers.authorization)
        const token=req.headers.authorization.split(" ")[1]
    //console.log(req.headers)
    //console.log(token)
    jwt.verify(token,secret,(err,data)=>{
        
        //console.log(err)
        if(!err){
            req.user=data.user
            //console.log(req.user)
            next()
        }
        else
            res.status(300).json({"message" : "Not athorized"})
    })}
    catch(error){
        res.status(404).json({"message" : "unable to verify"})
    }
}

const isAdmin=(req,res,next)=>{
    //console.log(req.user)
    const role=req.user.role
    if(role.toLowerCase()=="admin")
        next()
    else
        res.status(300).json({"message" : "Not an admin"})
}

module.exports={
    verifyToken,
    isAdmin
}
const userModel=require('../model/user.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const secret=process.env.secret

const saveUser=async(req,res)=>{
    const user=req.body
    //console.log(user)
    try{
        const existingUser=await userModel.findOne({"email" : user.email})
        
        if(existingUser){
            res.status(409).send({"message" : "user already exists !"})
        }
        else{
            await userModel.create(user)
            // jwt.sign({user},secret,(err,token)=>{
            //     if(!err)
            //         res.status(200).json(token)
            //     else
            //         res.status(300).send(err)
            // })
            res.status(200).send("true")
        }
    }
    catch(error){
        res.status(404).send("false")
    }
}

module.exports={
    saveUser
}
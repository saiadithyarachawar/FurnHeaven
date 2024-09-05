const loginModel=require('../model/login.model')
const userModel=require('../model/user.model')
const jwt=require('jsonwebtoken')
require('dotenv')
const secret=process.env.SECRET

const checkUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        //console.log(req.body)
        const user=await userModel.findOne({"email" : email})

        //console.log(user)
        if(user && user.password===password){
            const name=user.username
            const role=user.role

            const existingUser= await loginModel.findOne({"email" : email})
            if(!existingUser)
                loginModel.create({"email": email,"password" : password})
            jwt.sign({user},secret,(err,token)=>{
                if(!err)
                    res.status(200).json({token,role,name})
                else
                    res.status(404).send(false)
            })
        }
        else{
            res.status(404).send(false)
        }

    }
    catch(error){
        res.status(404).send(false)
    }
}
module.exports={
    checkUser
}

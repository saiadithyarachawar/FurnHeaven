const express=require('express')
const routes=express.Router()
const {
    saveUser
}=require('../controllers/user.controller')

routes.route('/')
    .post(saveUser)

module.exports=routes
const express=require('express')
const routes=express.Router();

const {checkUser}=require('../controllers/login.controller');

routes.route('/')
    .post(checkUser)

module.exports=routes
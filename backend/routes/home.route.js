const express=require('express')
const routes=express.Router();

const {getProducts}=require('../controllers/product.controller')
const {addToCart}=require('../controllers/cart.controller')

routes.get('/',getProducts)
routes.post('/:id',addToCart)

module.exports=routes
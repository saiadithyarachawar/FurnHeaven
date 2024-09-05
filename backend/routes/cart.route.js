const express=require('express')
const routes=express.Router()

const {
    addToCart,
    showCart,
    deleteCartItem,
}=require('../controllers/cart.controller')

routes.get('/',showCart)
routes.post('/:id',addToCart)
routes.delete('/:id',deleteCartItem)

module.exports=routes
const express =require('express')
const routes=express.Router();

const {
    getProducts,
    productSave,
    productDelete,
    productEditData,
    productEditSave,getProductById
}=require('../controllers/product.controller')

const {getUserProducts}=require('../controllers/order.controller')

routes.post('/addproduct',productSave)
routes.delete('/delete/:id',productDelete)
routes.patch('/productedit/:id',productEditSave)
routes.get('/productedit/:id',productEditData)
routes.get('/orders',getUserProducts)
routes.get('/' ,getProducts)
module.exports=routes
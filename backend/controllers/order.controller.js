const cartModel = require('../model/cart.model');
const orderModel=require('../model/order.model')
const productModel=require('../model/product.model')


const getUserProducts= async (req,res)=>{
    try{
        
        const orderProducts= await orderModel.find({})
        if(orderProducts.length>0)
            res.status(200).json(orderProducts)
        else
            res.status(200).json({"message" : "orders not placed"})
    }
    catch(error){
        res.status(404).send(error)
    }
}

const getOrders= async (req,res)=>{
    try{
        //console.log("hello")
        const userId =req.user.username;
        //console.log(req.user)
        const orders= await orderModel.find({"userId" : userId})
        if(orders.length>0)
            res.status(200).json(orders)
        else
            res.status(200).json(orders)
    }
    catch(error){
        console.error(error)
        res.status(404).json({"message" : "error"})
    }
}

const saveProduct= async(req,res)=>{
    try{
        const userId=req.query.username;
        const cartItems= await cartModel.find({"userId" : userId})
        cartItems.forEach(async (item)=>{
            const orderId=item.cartItemId;
            const productName=item.productName;
            const imageurl=item.imageurl;
            const price =item.price;
            await orderModel.create({
                "orderId" : orderId,
                "userId" : userId,
                "productName" : productName,
                "imageurl":imageurl,
                "price" : price,
            })
        })
        if(cartItems.length >0)
            res.status(200).json(cartItems)
        else
            res.status(404).json({"message" : "No items in cart"})
        
    }
    catch(error){
        //console.error(error)
        res.status(404).send(error)
    }
}
const placeOrder= async(req,res)=>{
    try{
        const userId=req.user.username;
        //console.log(userId)
        await orderModel.updateMany({"userId":userId},{$set : {"status" : "ordered"}})
        res.status(200).json({"message" : "orders placed"})
    }
    catch(error){
        //console.log(error)
        res.status(404).send({"message" : "error in placing order"})
    }
}

module.exports={
    getUserProducts,
    saveProduct,
    getOrders,
    placeOrder
}
const cartModel=require('../model/cart.model')
const productModel = require('../model/product.model')

const showCart=async(req,res)=>{
    try{
        const userId=req.query.userId
        const cartItems= await cartModel.find({"userId" : userId})
        if(cartItems.length>0){
            res.status(200).json(cartItems)
        }
        else{
            res.status(404).json({"message" : "no items"})
        }
    }
    catch(error){
        res.status(300).json({"message" : "Failed to fetch cart items"})
    }
}
const addToCart= async (req,res)=>{
    try{

        const cartItemId= req.params.id;
        //const quantity=req.params.quantity;
        const userId=req.body.username;
        const product= await productModel.findOne({"productId" : cartItemId})
        const productName=product.productName
        const price=product.price
        const imageurl=product.imageurl
        await cartModel.create({
            "cartItemId" : cartItemId,
            "userId" : userId,
            "productName" : productName,
            "quantity" : 1,
            "price" : price,
            "imageurl":imageurl
        })
        res.status(200).json({"message" : "Item added to cart"})
        
    }
    catch(error){
        res.status(300).json({"message" : "Failed to add product"})
    }
}

const deleteCartItem= async (req,res)=>{
    try{
        const cartItemId= req.params.id;
        const userId=req.query.userId;
        const item= await cartModel.findOneAndDelete({"cartItemId" : cartItemId,"userId" : userId})
        if(!item)
            {
                res.status(404).json({"message" : "product not found"})              
            }
        else
            res.status(200).json(item)
        
    }
    catch(error){
        res.status(300).json({"message" : "Failed to delete product"})
    }
}


module.exports={
    addToCart,
    showCart,
    deleteCartItem,
}
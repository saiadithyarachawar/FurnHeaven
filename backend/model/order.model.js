const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    orderId : {type : String, required : true , unique : true },
    userId : {type : String, required : true },
    productName : {type : String, required : true },
    imageurl : {type : String,},
    price : {type : String, required : true},
})

const orderModel =mongoose.model("order",orderSchema)

module.exports=orderModel
const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    productId : {type : String, required : true , unique : true},
    imageurl : {type : String, required : true },
    productName : {type : String, required : true },
    price : {type : String, required : true},
    description : {type : String},
    quantity : {type : String, required : true}
})

const productModel =mongoose.model("product",productSchema)

module.exports=productModel
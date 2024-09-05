const productModel=require('../model/product.model')

const getProducts=async(req,res)=>{
    try{
        const products= await productModel.find()
        //console.log(products)
        if(products.length>0)
        {
            res.status(200).json(products)
        }
        else{
            res.status(404).json({"message" : "no items"})
        }
    }
    catch(error){
        res.status(300).json({"message" : "Failed to fetch products"})
    }
}

const productSave= async (req,res)=>{
    try{
        const products= req.body
        await productModel.create(products)
        res.status(200).json(products)
        
    }
    catch(error){
        res.status(300).json({"message" : "Failed to add product"})
    }
}

const productDelete = async (req, res) => {
    try {
      const productId = req.params.id;
      if (!productId) {
        return res.status(400).json({ "message": "Product ID is required" });
      }
      const product = await productModel.findOneAndDelete({ "productId": productId });
      if (!product) {
        return res.status(404).json({ "message": "Product not found" });
      }
      return res.status(200).json(product);
  
    } catch (error) {
      console.error("Error deleting product:", error.message);
      return res.status(500).json({ "message": "Failed to delete product" });
    }
  };
const productEditData= async (req,res)=>{
    try{
        //console.log("req.params")
        const productId= req.params.id
        const product= await productModel.findOne({"productId" : productId})
        if(!product)
            res.status(404).json({"message" : "product not found"})
        else
            res.status(200).json(product)
        
    }
    catch(error){
        res.status(300).json({"message" : "Failed to add product"})
    }
}
const productEditSave= async (req,res)=>{
    try{
        const newProduct= req.body
        //console.log(newProduct)
        const product =await productModel.findOneAndUpdate({"productId" : newProduct.productId },newProduct)
        if(!product)
            res.status(400).json({"message" : "product not found"})
        else
            res.status(200).json(product)
    }
    catch(error){
        res.status(300).json({"message" : "Failed to add product"})
    }
}
module.exports={
    getProducts,
    productSave,
    productDelete,
    productEditSave,productEditData
}
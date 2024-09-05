const express=require('express');
const app=express();
const jwt=require('jsonwebtoken')
const cors=require('cors')

app.use(cors())

//Environmental variables
require('dotenv').config()
const port=process.env.PORT

//Routes
const userRoutes=require('./routes/user.route')
const productRoutes=require('./routes/product.route')
const orderRoutes=require('./routes/order.route')
const cartRoutes=require('./routes/cart.route')
const loginRoutes=require('./routes/login.route')
const homeRoutes=require('./routes/home.route')
const {verifyToken,isAdmin}=require('./middleware/authorization')

//mongDB connection
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://shivasripada04:furnihaven@cluster0.ijswaim.mongodb.net/furnihaven")
.then((res)=>{console.log("connected successfully")})
.catch((err)=>{console.log(err)})

app.use(express.json())
app.use(express.urlencoded({extended : true}))

//Routes
app.use('/order',verifyToken,orderRoutes)
app.use('/signup',userRoutes)
app.use('/home',homeRoutes)
app.use('/cart',verifyToken,cartRoutes)
app.use('/login',loginRoutes)
app.use('/admin',verifyToken,isAdmin,productRoutes)
//app.use('/addProduct',adminRoutes)
//app.use('/editProduct',adminRoutes)
app.listen(port,()=>{console.log(`server is listening at port ${port}`)})

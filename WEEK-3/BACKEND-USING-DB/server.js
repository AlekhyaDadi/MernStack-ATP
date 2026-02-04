// import exp from 'express'
import {userApp} from './APIs/userapi.js'
// import {connect} from 'mongoose'
import exp from 'express'
import {productApp} from './APIs/productapi.js'
import {connect} from 'mongoose'
const app=exp()
const port=4000

async function connectDB(){
    try{
    await connect('mongodb://localhost:27017/anuragdb3')
    console.log("db connection successful")
    app.listen(port,()=>console.log("Server listening on port 4000.."))
    }
    
    catch(err){
        console.log("error",err)
    }
}
connectDB()
//body parser middleware
app.use(exp.json())
//if path start with /user-api,forword req to userapp
app.use('/product-api',productApp)
app.use('/user-api',userApp)


//Assign port

//error handling middleware

function errorHandler(err,req,res,next){
    res.json({message:"error",reason:err.message})
}
app.use(errorHandler)
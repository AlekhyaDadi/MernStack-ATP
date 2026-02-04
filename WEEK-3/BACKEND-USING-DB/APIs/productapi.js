import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
export const productApp=exp.Router()

//test route

// const port=4000
// app.listen(port,()=>console.log("sevre listening on port 4000"))
//re
productApp.get('/products',async(req,res)=>{
    let productList=await ProductModel.find()

    //send res
    res.status(200).json({message:"product",payload:productList})

})


productApp.post('/products',async(req,res)=>{
    let newproduct=req.body;
    //create new user document
    let newproductdoc=new ProductModel(newproduct)
    //save in db
    await newproductdoc.save()
    //send res
    res.status(201).json({message:"product created",payload:newproductdoc})
})


//read product
productApp.get('/products/:id',async(req,res)=>{
    //get obj id from url poarameter
    let objId=req.params.id;
    //find user in db
    let productObj=await ProductModel.findById(objId)

    res.status(200).json({message:"product is:",payload:productObj})
})


//update an user

productApp.put('/products/:id',async(req,res)=>{
    //get objid from url params
    let objId=req.params.id
    //get mpdofied user from req
    let modifiedproduct=req.body
    //make update
    let latestproduct=await ProductModel.findByIdAndUpdate(objId,
        {$set:{...modifiedproduct}},
        {new:true,runValidators:true})

    //send res
    res.status(200).json({message:"product updated",payload:latestproduct})
})

//Delete
productApp.delete('/products/:id',async(req,res)=>{
    //get objid from url params
    let objId=req.params.id
    //delete user by id
    let deleteproduct=await ProductModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"product deleted",payload:deleteproduct})
})
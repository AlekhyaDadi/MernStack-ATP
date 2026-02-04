import exp from 'express'
import {userModel} from '../models/userModel.js'
export const userApp=exp.Router()

//test route

// const port=4000
// app.listen(port,()=>console.log("sevre listening on port 4000"))
//re
userApp.get('/users',async(req,res)=>{
    let userList=await userModel.find()

    //send res
    res.status(200).json({message:"users",payload:userList})

})


userApp.post('/users',async(req,res)=>{
    let newuser=req.body;
    //create new user document
    let newuserdoc=new userModel(newuser)
    //save in db
    await newuserdoc.save()
    //send res
    res.status(201).json({message:"user created"})
})


//read users
userApp.get('/users/:id',async(req,res)=>{
    //get obj id from url poarameter
    let objId=req.params.id;
    //find user in db
    let userObj=await userModel.findById(objId)

    res.status(200).json({message:"user",payload:userObj})
})


//update an user

userApp.put('/users/:id',async(req,res)=>{
    //get objid from url params
    let objId=req.params.id
    //get mpdofied user from req
    let modifiedUser=req.body
    //make update
    let latestUser=await userModel.findByIdAndUpdate(objId,
        {$set:{...modifiedUser}},
        {new:true})

    //send res
    res.status(200).json({message:"user updated",payload:latestUser})
})

//Delete
userApp.delete('/users/:id',async(req,res)=>{
    //get obj id from url params
    let objId=req.params.id
    //delete user by id
    let deleteuser=await userModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"user deleted",payload:deleteuser})
})
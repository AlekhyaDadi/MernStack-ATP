import {UserTypeModel} from '../models/UserModel.js'

export const checkAuthor=async (req,res,next)=>{
    //get author id
    let aid=req.body?.author || req.params?.authorId
    //verify author
    const author = await UserTypeModel.findById(aid)
        if(!author){
            return res.status(401).json({message:"Invalid Author"})
        }
        if(author.role!="AUTHOR"){
            return res.status(403).json({message:"User is not an Author"})
        }
        if(!author.isActive){
            return res.status(403).json({message:"Author account not active"})
        }
         //forward to next
        next()
}
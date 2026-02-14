import exp from 'express'
import { register } from '../services/authService.js';
export const userRoute=exp.Router()

//Register user
userRoute.post("/users", async (req, res) => {
  //get user obj from req
  let userObj = req.body;
  //call register
  const newUserObj = await register({ ...userObj, role: "USER" });
  //send res
  res.status(201).json({ message: "user created", payload: newUserObj });
});


//Read all articles(protected route)
userRoute.get("/articles/:userCred",async(req,res)=>{
    //get 
    let authorId=req.params.authorId()
    //check the author
    let author=await UserTypeModel.findById(article.author)
    if (!author || author.role!="AUTHOR"){
        return res.status(401).json({message:"Invalid author"})
    }
    //read all articles by this author
    let articles=await ArticleModel.find({author:authorId,isArticleActive:true})
    //send response
    res.status(200).json({message:"articles",payload:articles})
});



//Add comment to an article(protected route)
import exp from 'express'
import { register } from '../services/authService.js'
import { UserTypeModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { checkAuthor } from "../middlewares/checkAuthor.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const authorRoute = exp.Router();

//Register author (public)
authorRoute.post("/users", async (req, res) => {
  //get user obj from req
  let userObj = req.body;
  //call register
  const newUserObj = await register({ ...userObj, role: "AUTHOR" });
  //send response
  res.status(201).json({ message: "author created", payload: newUserObj });
});


//Create article(protected route)
authorRoute.post("/articles",verifyToken ,checkAuthor, async (req, res) => {
  //get article from req
  let article = req.body;
  //create article document
  let newArticleDoc = new ArticleModel(article);
  //save
  let createdArticleDoc = await newArticleDoc.save();
  //send res
  res.status(201).json({ message: "article created", payload: createdArticleDoc });
});

//Read articles of author(protected route)
authorRoute.get("/articles/:authorId",verifyToken ,checkAuthor, async (req, res) => {
  //get author id
  let aid = req.params.authorId;

  //read articles by this author which are active
  let articles = await ArticleModel.find({ author: aid, isArticleActive: true }).populate("author", "firstName email");
  //send response
  res.status(200).json({ message: "articles", payload: articles });
});

//edit article (protected route)
authorRoute.put("/articles",verifyToken ,checkAuthor,async (req, res) => {
  //get modified article from req
  let { articleId, title, category, content,author } = req.body;
  //find article
  let articleOfDB = await ArticleModel.findOne({_id:articleId,author:author});
  if (!articleOfDB) {
    return res.status(401).json({ message: "Article not found" });
  }
  
  //update the article
  let updatedArticle = await ArticleModel.findByIdAndUpdate(
    articleId,
    {
      $set: { title, category, content },
    },
    { new: true },
  );
  //send res(updated article)
  res.status(200).json({ message: "article updated", payload: updatedArticle });
});



// Soft delete an article
authorRoute.put("/articles/soft-delete",verifyToken,checkAuthor,async (req, res) => {
    const { articleId, author } = req.body;
    // Find article and soft delete in ONE step
    const deletedArticle = await ArticleSchemaModel.findOneAndUpdate(
      { _id: articleId, author: author },
      { $set: { isArticleActive: false } },
      { new: true } // return updated document
    );
    // If article not found
    if (!deletedArticle) {
      return res.status(400).json({ message: "article not found" });
    }
    // Send response
    res.status(200).json({message: "article soft deleted successfully",payload: deletedArticle});
  }
);

// restore an article
authorRoute.put("/articles/restore",verifyToken,checkAuthor,async (req, res) => {
    const { articleId, author } = req.body;
    // Find article and soft delete in ONE step
    const deletedArticle = await ArticleSchemaModel.findOneAndUpdate(
      { _id: articleId, author: author },
      { $set: { isArticleActive: true } },
      { new: true } // return updated document
    );
    // If article not found
    if (!deletedArticle) {
      return res.status(400).json({ message: "article not found" });
    }
    // Send response
    res.status(200).json({message: "article soft deleted successfully",payload: deletedArticle});
  }
);

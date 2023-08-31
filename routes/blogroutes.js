const express=require("express")
const storage=require("../middlewares/multer")
const multer=require("multer")
const {getHome, getList, getAbout,getCreateBlog, postBlog, getBlog}=require("../controllers/blogControllers")
const upload=multer({storage:storage})

let blogRouter=express.Router()

blogRouter.get("/",getHome)
blogRouter.get("/create-Blog",getCreateBlog)
blogRouter.get("/list",getList)
blogRouter.get("/about",getAbout)
blogRouter.get("/:id",getBlog)

blogRouter.post("/create-Blog",upload.single("photo"),postBlog)

module.exports=blogRouter;
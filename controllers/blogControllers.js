const Blog = require("../models/Blog")

const getHome=async(req,res)=>{
try {
    let blogs=await Blog.find().limit(3)
    res.render("home",{blogs:blogs})
} catch (error) {
    console.log(error);
    res.redirect("/blog")
}}

const getList=async(req,res)=>{
    try {
        let blogs=await Blog.find()
        res.render("list",{blogs:blogs})
    } catch (error) {
        console.log(error);
        res.redirect("/blog/list")
    }
    }

    const getAbout=(req,res)=>{
        res.render("about")
        }

        const getBlog=async(req,res)=>{
            let id=req.params.id
            try {
               let blog= await Blog.findById(id).lean()
               let originalString=blog.photo[0].path
               let newString=originalString.slice(6)
            //    console.log(blog);
                res.render("blog",{blog,newString})
            } catch (error) {
                console.log(error);
                res.redirect("/blog/list")
            }
            }
        
    
        const getCreateBlog=(req,res)=>{
            res.render("createBlog")
            }

            const postBlog=async(req,res)=>{
                try {
                    let title=req.body.title
                    let snippet=req.body.snippet
                    let description=req.body.description
                    let photo=req.file
                    await Blog.create({
                        title:title,
                        snippet:snippet,
                        description:description,
                        photo:photo
                    })
                    res.redirect("/blog/create-Blog")

                } catch (error) {
                    console.log(error);
                    res.redirect("/blog")
                }
            }
module.exports={
    getHome,getList,getAbout,getCreateBlog,postBlog,getBlog
}
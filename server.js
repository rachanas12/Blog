if(process.env.NODE_ENV!=="production"){
    require("dotenv").config();
}
const express=require("express")
const mongoose=require("mongoose");
const blogRouter = require("./routes/blogroutes");
const app = express()
let PORT=process.env.PORT



//DB CONNECTION
async function db(){
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("db connected");
}
db()

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))

app.use("/blog",blogRouter)

app.get("/",(req,res)=>{
    res.send("hello")
})

//this is if we want to use https
// let options={
//     key:fs.readFileSync("./key.pem"),
//     cert:fs.readFileSync("./cert.pem")
// }

// https.createServer(options,app).listen( PORT,()=>{
//     console.log(("SERVER IS RUNNING"));
// })

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
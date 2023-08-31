const {Schema,model}=require("mongoose")
//create schema
const blogSchema=new Schema({
    title:{
        type:String,
        trim:true,
        require:true
    },
    snippet:{
        type:String,
        trim:true,
        require:true
    },
    description:{
        type:String,
        trim:true,
        require:true
    },
    photo:{
        type:[""],
        default:""
    }
})
let Blog=model("blog",blogSchema)
module.exports=Blog
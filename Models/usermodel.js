const mongoose=require("mongoose")

//create schema ( on l'a divisé sur deux étapes)
const schema=mongoose.Schema

const userSchema=new schema({
    username:{
        type:String,
        required:true ,unique:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})
//export  (user remplace user schema)
module.exports =mongoose.model("user",userSchema)

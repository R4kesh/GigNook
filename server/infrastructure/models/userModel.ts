import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    firstname:{
        type:String,
        
    },
    lastname:{
        type:String,
       
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    joinedat:{
        type:Date,
        default:Date.now
    }
})

const User=mongoose.model('userCollection',userSchema)
export default User
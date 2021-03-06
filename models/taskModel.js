const mongoose=require('mongoose')
const { time } = require('node:console')
const taskSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    creator:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        default:1800
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:1800
    }
})
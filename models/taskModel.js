const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:[true,"A task must have a name"],
        unique:true
    },
    description:{
        type:String,
        required:[true,"A task must have a description"]
    },
    creator:{
        type:String,
        required:[true,"A task must have a creator"]
    },
    duration:{
        type:Number,
        required:[true,"A task must have a duration"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})//,{timeStamp:true,expires:})

const Task=mongoose.model("Task",taskSchema);
module.exports=Task;
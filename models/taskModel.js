const mongoose=require('mongoose');
const validator=require('validator')

/* Creating Schema of the task.
A task must have a name, description, creator, and duration in minutes.
createdAt property is set as current date of creation by default.
*/

const taskSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:[true,"A task must have a name"],
        unique:true,
        trim:true,
        maxLength:[20,"A task name must have 20 or less characters"],
        minLength:[1,"A task name must have atleast 2 character"]
    },
    description:{
        type:String,
        required:[true,"A task must have a description"],
        trim:true,
        maxLength:[50,"A task description must have 50 or less characters"]
    },
    creator:{
        type:String,
        required:[true,"A task must have a creator"],
        trim:true
    },
    //duration in minutes, for example duraiton set to 2, will delete the document after 2 minutes
    duration:{
        type:Number,
        required:[true,"A task must have a duration"],
        min:[1,'The duration in minutes must be a positive value']
    },
    //mongoose will create an index at the background and will set "expireAfterSeconds" field to "expires" field
    expireAt:{
        type:Date,
        default:Date.now()
    }  
},{timestamps:true})


const Task=mongoose.model("Task",taskSchema);
module.exports=Task;
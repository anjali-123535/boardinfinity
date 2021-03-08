const mongoose=require('mongoose');
/* Creating Schema of the task
A task must have a name, description, creator, and duration in min.
createdAt property is set as current date of creation by default
*/

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
    //duration in minutes, for example duraiton set to 2, will delete the document after 2 minutes
    duration:{
        type:Number,
        required:[true,"A task must have a duration"]
        //index:{expires:this.duration*60}
    },
    //mongoose will create an index at the background and will set "expireAfterSeconds" field to "expires" field
      expireAt:{
        type:Date,
        default:Date.now()
        //expires:1000
       
    }  
})
//this will get called before saving the data to the database
 /* taskSchema
    .pre('save', function(next){
        console.log(this.duration)
  this.expireAt.index.expires = this.duration*60
  next();   
});  */

const Task=mongoose.model("Task",taskSchema);
module.exports=Task;
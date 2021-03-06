const Task=require('./../models/taskModel')

exports.createTask=async(req,res)=>{
    try{
const newTask=await Task.create(req.body)
console.log(req.body.name)
res.status(201).json({
    status:"success",
    data:{
        task:newTask
    }
})    
}
    catch(err){
        res.status(400).json({
            status:"fail",
            message:[err,"task not created"]
        })    
    }
}

exports.getAllTasks = async(req, res) => {
    try{
 //   console.log(req.requestTime);
  const tasks=await Task.find();
    res.status(200).json({
      status: 'success',
     //
      results: tasks.length,
      data: {
        tasks
      }
    });
}catch (err) {
    res.status(404).json({
      status: 'fail',
      message: "not able to fetch all the tasks"
    });
  }
  };
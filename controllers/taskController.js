const Task = require('./../models/taskModel')

exports.createTask = async (req, res) => {
  try {
    const date=new Date();
    const newDate=new Date(date.getTime()+req.body.duration*60000);
    req.body.expireAt=newDate;
    const newTask = await Task.create(req.body)
    console.log(req.body.name)
    res.status(201).json({
      status: "success",
      data: {
        task: newTask
      }
    })
  }
  catch (err) {
    res.status(400).json({
      status: "fail",
      message: [err, "task not created"]
    })
  }
}

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: 'success',
      results: tasks.length,
      data: {
        tasks
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: "not able to fetch all the tasks"
    });
  }
};
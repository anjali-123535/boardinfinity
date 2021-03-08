const Task = require('./../models/taskModel')

// Create and Save a NEW TASK
exports.createTask = async (req, res) => {
  try {
    const date = new Date();
    console.log(req.body)
    const newDate = new Date(date.getTime() + req.body.duration * 60 * 1000);
    req.body.expireAt = newDate;
    const newTask = await Task.create(req.body)
    res.status(201).json({
      status: "success",
      message: "Task successfully created"
    })
  }
  catch (err) {
    console.log(err)
    res.status(400).json({
      status: "fail",
      message: "Task not created"
    })
  }
}

// Retrieve and return ALL TASKS from the database
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
      message: "Not able to fetch all the Tasks"
    });
  }
};
const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

//it gonaa run as soon as someone hits the task rout with a post request
router
  .route('/add')
  .post(taskController.createTask);
  
 router
   .route('/list')  
   .get(taskController.getAllTasks); 

module.exports=router;
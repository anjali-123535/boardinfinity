const cron = require('node-cron');
const taskModel = require('./../models/taskModel')


const job = cron.schedule('* * * * *', () => {
    taskModel.remove({ "expireAt": { $lte: new Date().getTime() } }).then((res) => {
        console.log("successs")
    }).catch(err => {
        console.log("err ", err)
    })
});
job.start();

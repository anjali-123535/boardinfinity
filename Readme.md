# LIVE LINK #
##https://boardinfinity-todo.herokuapp.com/##

*An example about how to create a RESTful API using Express.js. The four CRUD operations are provided: create, read, update and delete records. This server keeps an array of JSON objects in memory and runs the CRUD operations on it. If the server is restarted everything returns to the initial configuration.*

#Installation
##Install Dependencies

Node.js (version 6.x is recommended)
*  create a folder for your project*
*  create a file name app.js in the root folder "root/app.js"*
*  run the command npm init to have package.json file*
*  now install the dependencies :*
**npm install express**
 

 **create a config.env file in the root folder to store your environment variables including**
 *PORT:8000*
 *DATABASE:SRV which you will get while you are connecting Application with the Atlas*

#Available end-points#
##GET /list##
###Gets all the available tasks.###

##POST /add##
###Create a task.###

#Headers#

##Content-Type : application/json##
//duration is in minutes
Request body (raw)

    {
        "name": "task1",
        "description": "Maths Assignement",
        "creator": "Alexa",
        "duration":3
    }

const express=require('express')
const dotenv=require('dotenv')
const taskRouter=require('./routes/taskRouter')
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
dotenv.config({ path: './config.env' });

const DB=process.env.DATABASE;

const app=express()
//body-parser: A middleware to parse incoming request inputs into our req.body object
app.use(bodyParser.json())


app.get("/",(req,res)=>{
  res.send("BoardInfinity Assignment")
})

app.use('/', taskRouter)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!')).catch(err=>{
      console.log("error",err);
  })
require('./services/cron')
const port=process.env.port || 3000
app.listen(port,()=>{
    console.log(`App running on port http://localhost:${port}`);
    });


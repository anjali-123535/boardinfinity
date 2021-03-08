const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });

const taskRouter = require('./routes/taskRouter')

const mongoose = require('mongoose');

//body-parser: A middleware to parse incoming request inputs into our req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use('/', taskRouter)
app.get("/", (req, res) => {
  res.send("BoardInfinity Assignment")
})


const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!')).catch(err => {
    console.log("error", err);
  })

// require cron job 
require('./services/cron')

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});


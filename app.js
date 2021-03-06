const express=require('express')
const dotenv=require('dotenv')
const port=process.env.port || 3000
const app=express()

app.listen(port,()=>{
console.log(`App running on port ${port}`);
});
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectToDb = require('./db/foodApp')

const port = process.env.PORT;

connectToDb();

app.get('/',(req,res)=>{
    res.send("Working");
})

app.listen(port,()=>{
    console.log("App listening on port : ",port);
})
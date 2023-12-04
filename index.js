const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectToDb = require('./db/foodApp');

const port = process.env.PORT;

connectToDb();

app.use(express.json());
app.use(cors())

// routes
app.use('/api/user',require('./routes/v1/user'));

app.get('/',(req,res)=>{
    res.send("Working");
})

app.listen(port,()=>{
    console.log("App listening on port : ",port);
})
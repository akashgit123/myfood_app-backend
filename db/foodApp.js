const mongoose = require('mongoose');

const uri = process.env.MONGODB_URL;


const connectToDb = async() =>{
    mongoose.connect(uri)
    .then(() => console.log('Connected to foodApp database'))
    .catch((err)=>{
        console.log("Connection error :",err) 
    })
}

module.exports = connectToDb;
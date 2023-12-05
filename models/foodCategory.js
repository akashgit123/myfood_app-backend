const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    CategoryName :{
        type : String ,
        required : true,
    }
},
    {
        timestamps:true,
    }
);

module.exports = mongoose.model('foodCategory',categorySchema);
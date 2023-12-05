const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    CategoryName :{
        type : String ,
        required : true,
    },
    name :{
        type : String ,
        required : true,
    },
    img :{
        type : String ,
        required : true,
    },
    options :{
        type : [{
            half: Number,
            full: Number,
        }] ,
        required : true,
    },
    description :{
        type : String ,
        required : true,
    },
},
{
    timestamps:true,
}
);

module.exports = mongoose.model('foodData',foodSchema);
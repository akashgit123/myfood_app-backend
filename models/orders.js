const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userEmail :{
        type : String ,
        required : true,
        unique : true,
    },
    orderDetails : {
        type : Array,
        required : true ,
    }
},
{
    timestamps:true,
}
);

module.exports = mongoose.model('orders',orderSchema);
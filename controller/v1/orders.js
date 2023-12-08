const Order = require('../../models/orders');

const addUserOrders = async(req,res) =>{
    try {
        let data = req.body.orderDetails;
        await data.splice(0,0,{orderDate:req.body.orderDate});
        let emailId = await Order.findOne({'userEmail':req.body.userEmail});

        if(emailId == null){
            try {
                await Order.create({
                    userEmail : req.body.userEmail,
                    orderDetails:[data]
                })
                .then(()=>{
                    res.status(200).json({success:true})
                })
            } catch (error) {
                console.log("catch 1 :",error);
            }
        }
        else{
            try {
                await Order.findOneAndUpdate({userEmail:req.body.userEmail},{$push:{orderDetails:data}})
                .then(()=>{
                    res.status(200).json({success:true})
                })
            } catch (error) {
                console.log("in else catch:",error);
            }
        }
    } catch (err) {
        console.log("final catch :",err);
        res.status(400).json({error:err})
    }
}

const allOrders = async(req,res) =>{
    try {
        const response = await Order.find({});
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

module.exports = {addUserOrders , allOrders};
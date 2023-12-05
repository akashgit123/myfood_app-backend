const foodCategory = require('../../models/foodCategory');

const fetchAllFoodCategory = async(req,res)=>{
    try {
        const data = await foodCategory.find({ })
        res.json({success:"Fetched food category",data});

    } catch (error) {
        console.log("Error",error);
        res.json({fail:"something went wrong"});
    }
}

module.exports = {fetchAllFoodCategory};
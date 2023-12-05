const foodData = require('../../models/foodData');

const fetchAllFoodData = async(req,res)=>{
    try {
        const data = await foodData.find({ })
        res.json({success:"Fetched food data",data});

    } catch (error) {
        console.log("Error",error);
        res.json({fail:"something went wrong"});
    }
}

module.exports = {fetchAllFoodData};
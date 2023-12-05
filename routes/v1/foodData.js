const express = require('express');
const router = express.Router();
const foodData = require('../../controller/v1/foodData');

router.post('/fetchAllFood',foodData.fetchAllFoodData);

module.exports = router;
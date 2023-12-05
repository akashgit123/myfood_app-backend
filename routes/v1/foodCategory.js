const express = require('express');
const router = express.Router();
const foodCategory = require('../../controller/v1/foodCategory');

router.post('/fetchFoodCategory',foodCategory.fetchAllFoodCategory);

module.exports = router;
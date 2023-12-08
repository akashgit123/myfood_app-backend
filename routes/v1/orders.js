const express = require('express');
const router = express.Router();
const orders = require('../../controller/v1/orders');

router.post("/addOrders",orders.addUserOrders);
router.post("/allOrders",orders.allOrders);

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../../controller/v1/user');
const {body,} = require("express-validator");

const userValidator = [
    body('name',"Mention your name").notEmpty(),
    body('email',"Enter valid email").isEmail(),
    body('password',"Atleast 5 Characters").isLength({min:5})
]

router.post("/createUser",userValidator,userController.createUser);
router.get("/listAllUsers",userController.listAllUsers);


module.exports = router;
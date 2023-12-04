const User = require('../../models/User');
const {validationResult} = require('express-validator')

const createUser = async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        const {name , email , password ,location } = req.body;
        const user = await User.create({
            name , email , location , password
        })
        res.json({success:`user created : ${user.name}`});
        
    } catch (error) {
        console.log("Error :",error);
        res.json({fail:"user not created"});
    }
}

const listAllUsers = async(req,res) =>{
    try{
        const users =await User.find();
        res.json(users);
    }
    catch(error){
        console.log("Error",error);
        res.json({message:"Something went wrong"})
    }
}

module.exports = {createUser , listAllUsers};
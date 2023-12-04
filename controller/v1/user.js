const User = require('../../models/User');
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
var jwt = require('jsonwebtoken');

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const createUser = async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        const {name , email , password ,location } = req.body;
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash =  bcrypt.hashSync(password, salt);
        const user = await User.create({
            name , email , location , password:hash
        })
        const data = {
            userId : user._id
        }
        const authToken = jwt.sign(data, jwtSecretKey, { expiresIn: '2h' });
        res.json({success:"User created",user,authToken});
        
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

const login = async(req,res)=>{
    try{
        const {email, password} = req.body;

        let userData =await User.findOne({email});
        if(!userData){
            return res.status(400).json({fail:"Invalid Credentials"});
        }

        const comparePassword = await bcrypt.compare(password, userData.password);
        if(!comparePassword){
            return res.status(400).json({fail:"Invalid Credentials"});
        }

        const data = {
            userId : userData._id
        }
        const authToken = jwt.sign(data, jwtSecretKey, { expiresIn: '2h' });

        return res.status(200).json({success:"Valid user",authToken});
    }
    catch(error){
        res.json({fail:"Something went wrong"});
        console.log("Error:",error);
    }
}

module.exports = {createUser , listAllUsers , login};
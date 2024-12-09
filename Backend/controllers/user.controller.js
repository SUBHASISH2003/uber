const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blackListedTokenModel = require('../models/blackListToken.model');


//It handles HTTP requests for registering a user.
module.exports.registerUser = async (req,res,next) => {

    const errors = validationResult(req); //Checks for validation errors in the incoming request
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password} = req.body; //requesing body for user details


    const isUserAlreadyExist = await userModel.findOne({email});

    if (isUserAlreadyExist) {
        return res.status(400).json({messege: 'User already exit'});
    }


    const hashedPassword = await userModel.hashPassword(password); // to securely hash the user’s password.

    //passing the user data (including the hashed password) to save the user in the database.
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken(); //token created

    res.status(201).json({token, user}); //pass token and user
    
    
}


//It handles HTTP requests for login a user.
module.exports.loginUser = async (req,res,next) => {

    const errors = validationResult(req); //Checks for validation errors in the incoming request
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body; //requesing body for user details

    const user = await userModel.findOne({email}).select('+password');//Finding the User

    if(!user) {
        return res.status(401).json({massege: 'Invalid email or password'}); //User Existence Check
    }

    const isMatch = await user.comparePassword(password); //Password Comparison

    if(!isMatch) {
        return res.status(401).json({massege: 'Invalid email or password'}); //Password Mismatch Check
    }

    const token = user.generateAuthToken(); //Generating the Token

    res.cookie('token', token);

    res.status(200).json({token, user}); //sends the generated token and user details

 
}



//This function is meant to handle requests for fetching the profile details of the currently authenticated user.
module.exports.getUserProfile = async (req,res,next) => {

    res.status(200).json(req.user);

}


module.exports.logoutUser = async (req,res,next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blackListedTokenModel.create({token});
    
    res.status(200).json({message: 'Logged out'});

}

const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blackListedTokenModel = require('../models/blackListToken.model');
const {validationResult} = require('express-validator');



//It handles HTTP requests for registering a user.
module.exports.registerCaptain = async (req,res,next) => {

    const errors = validationResult(req); //Checks for validation errors in the incoming request
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body; //requesing body for user details

    const isCaptainAlreadyExist = await captainModel.findOne({email});

    if (isCaptainAlreadyExist) {
        return res.status(400).json({messege: 'Captain already exit'});
    }

    const hashedPassword = await captainModel.hashPassword(password); // to securely hash the user’s password.

    //passing the user data (including the hashed password) to save the user in the database.
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken(); //token created

    res.status(201).json({token, captain}); //pass token and user
    
    
}


//It handles HTTP requests for login a user.
module.exports.loginCaptain = async (req,res,next) => {

    const errors = validationResult(req); //Checks for validation errors in the incoming request
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body; //requesing body for user details

    const captain = await captainModel.findOne({email}).select('+password');//Finding the User

    if(!captain) {
        return res.status(401).json({massege: 'Invalid email or password'}); //User Existence Check
    }

    const isMatch = await captain.comparePassword(password); //Password Comparison

    if(!isMatch) {
        return res.status(401).json({massege: 'Invalid email or password'}); //Password Mismatch Check
    }

    const token = captain.generateAuthToken(); //Generating the Token

    res.cookie('token', token);

    res.status(200).json({token, captain}); //sends the generated token and user details

 
}


module.exports.getCaptainProfile = async (req,res,next) => {

    res.status(200).json(req.captain);

}


module.exports.logoutCaptain = async (req,res,next) => {
    res.clearCookie('token');
    
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await blackListedTokenModel.create({token});
    
    res.status(200).json({message: 'Logged out'});

}
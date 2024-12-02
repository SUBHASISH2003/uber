const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
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

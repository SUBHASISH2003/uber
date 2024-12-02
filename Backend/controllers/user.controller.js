const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');



//It handles HTTP requests for registering a user.
module.exports.registerUser = async (req,res,next) => {

    const errors = validationResult(req); //Checks for validation errors in the incoming request
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password} = req.body; //requesing body for user details

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
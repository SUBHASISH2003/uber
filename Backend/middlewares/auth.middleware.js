//This code defines a middleware function
//This middleware is typically used to protect routes and ensure only authorized users can access them.

const userModel = require('../models/user.model');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');



//Middleware Logic
module.exports.authUser = async (req,res,next) => {

    //Extract the Token
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {


        //Verify the Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id); // Retrieve the User


        req.user = user; //Attach User to Request

        return next(); //Proceed to the Next Middleware/Handler

    }catch (err) {
        return res.status(401).json({message: 'Unauthorized'}); //Handle Token Verification Errors
    }

}
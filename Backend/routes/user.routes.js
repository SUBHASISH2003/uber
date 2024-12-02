const express = require('express'); 
const router = express.Router();//create router
const {body} = require("express-validator") //require express validator
const userController = require('../controllers/user.controller');//require user controller
const authMiddleware = require('../middlewares/auth.middleware');




//create register route
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be atleat 3 character'),
    body('fullname.lastname').isLength({min: 3}).withMessage('Last name must be atleat 3 character'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 character'),
],
userController.registerUser
)


//create login route
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 character'),
],
userController.loginUser
)

// create profile route
router.get('/profile',authMiddleware.authUser, userController.getUserProfile)

//create logout route
router.get('/logout',authMiddleware.authUser, userController.logoutUser)



module.exports = router; 
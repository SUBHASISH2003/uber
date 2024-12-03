const captainController = require('../controllers/captain.controller');//require captain controller
const express = require('express'); 
const router = express.Router();//create router
const {body} = require("express-validator") //require express validator
const authMiddleware = require('../middlewares/auth.middleware');



//create register route
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be atleat 3 character'),
    body('fullname.lastname').isLength({min: 3}).withMessage('Last name must be atleat 3 character'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 character'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be at least 3 character'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate must be at least 3 character'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),




],
captainController.registerCaptain
)



//create login route
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 character'),
],
captainController.loginCaptain
)


router.get('/profile',authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain, captainController.logoutCaptain)




module.exports = router; 
const captainModel = require('../models/captain.model');

//to creat captain
module.exports.createCaptain = async({
    firstname, lastname, email, password,color, plate, capacity, vehicleType
}) =>{
    //check all details are filled or not
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}
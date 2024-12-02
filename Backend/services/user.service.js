const userModel = require('../models/user.model');

//to creat user
module.exports.createUser = async({
    firstname, lastname, email, password
}) =>{
    //check all details are filled or not
    if (!firstname || !lastname || !email || !password){
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}
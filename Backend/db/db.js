const mongoose = require('mongoose'); //require mongoose

function connectToDb(){ //to connect with database
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Connected to DB');

    }).catch(err => console.log(err)); // if error occur
}
module.exports = connectToDb; 
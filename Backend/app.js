const dotenv = require('dotenv'); //require dotenv
dotenv.config(); //config dotenv
const express = require('express'); //require express
const cors = require('cors'); //require cors
const app = express(); //call express using app
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');//require user routes

connectToDb();

app.use(cors()); //use cors
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());



app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/users', userRoutes); // creating user routes

module.exports = app; // exports app 
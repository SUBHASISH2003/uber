const http = require('http'); //require http
const app  = require('./app'); //require app
const port = process.env.PORT || 3000; // process a port which was created in .env folder

const server = http.createServer(app); //create server of app

server.listen(port, () =>{
    console.log(`server is running on port ${port}`) //creating a port
}); 
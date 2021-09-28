/* With destructuring and default arguments, 
set the variable PORT to be equal to whatever 
value is found inside of process.env 
or default to 5000.
*/
const { PORT = 5000 } = process.env;
// You require the Express application that you exported.
const app = require("./app");
//This function will run when the server successfully starts.
const listener = () => console.log(`Yo, we be listening on Port ${PORT}!`);
/*
The listen() method on your Express application is what 
runs the server. It takes two arguments: a port number 
and a function. The PORT variable defines where your 
server is running, and the listener() function will 
get called as soon as the server has successfully started.
*/
app.listen(PORT, listener);
const express = require("express");

const app = express();

const validateZip = require("./middleware/validateZip.js");
const getZoos = require("./utils/getZoos.js");

// Functions

// Middleware Routes

//Middleware Routes w/ anonymous functions

app.get(
    '/check/:zip', 
    validateZip, 
    (req, res, next) => {
        const theZip = req.params.zip;
        const theZoo = getZoos(theZip);
        if( theZoo ) {
            res.send(`${theZip} exists in our records.`);
        } else {
            res.send(`${theZip} does not exist in our records.`)
        }
        
    }
);

app.get(
    '/zoos/all', 
    (req, res, next) => {
        const theAdmin = req.query.admin;
        const theZoos = getZoos();
        if( theAdmin === "true" ) {
            res.send(`All zoos: ${theZoos.join("; ")}`);
        } else {   
            res.send("You do not have access to that route.");
        }
    }
);

app.get(
    '/zoos/:zip', 
    validateZip, 
    (req, res, next) => {
        const theZip = req.params.zip;
        const theZoos = getZoos(theZip);
        if( theZoos.length === 0) {
            res.send(`${theZip} has no zoos.`)
        } else {
            res.send(`${theZip} zoos: ${theZoos.join("; ")}`);
        }
        
    }
);

// Not-found handler
app.use((req, res, next) => {
    res.send("That route could not be found!");
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
});

module.exports = app;
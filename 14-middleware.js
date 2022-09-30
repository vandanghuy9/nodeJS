// console.log('Express Tutorial')

const express = require('express');
const path = require('path'); // built-in path module
const app = express();
const {products} = require('./data');
//set up static and middleware

// req => middleware => res
const logger = function(req,res,next){ //middleware
    const method = req.method;
    const url = req.url;
    console.log(method,url);
    next(); // every time invoke middleware, must send back own res or pass to next
};
app.get('/',logger,(req,res) => {
    res.send("home");
})
app.get('/about',logger,(req,res) => {
    res.send("About");
})
app.listen(5000, function(){

    console.log("server is good");
});

// console.log('Express Tutorial')

const express = require('express');
const path = require('path'); // built-in path module
const app = express();
const {products} = require('./data');
//set up static and middleware
// req => middleware => res
const logger = require('./logger'); // create separate file for middleware

app.use(logger); //use logger on every routes
//app.use can be used when want to apply on every route
app.get('/',(req,res) => {
    res.send("home");
})
app.get('/about',(req,res) => {
    res.send("About");
})
app.get('/api/products',(req,res) => {
    res.send("Products");
})
app.listen(5000, function(){

    console.log("server is good");
});

// console.log('Express Tutorial')

const express = require('express');
const path = require('path'); // built-in path module
const app = express();
const {products} = require('./data');
//set up static and middleware
// req => middleware => res
const logger = require('./logger'); // create separate file for middleware
const morgan = require('morgan'); //install morgan modules
const { resourceLimits } = require('worker_threads');
app.use(morgan('tiny'));
 //use logger on every routes
//app.use can be used when want to apply on every route
app.get('/',(req,res) => { //homepage
    res.send("home");
})
app.get('/about',(req,res) => { //about
    res.send("About");
})
app.get('/api/products',(req,res) => { //localhost:5000/api/products?user=john
    console.log(req.user);
    res.send("Products");
})
app.listen(5000, function(){

    console.log("server is good");
});

// result 
// server is good
// GET / 200 4 - 9.178 ms
// undefined
// GET /api/products?user=john 304 - - 3.675 ms

// console.log('Express Tutorial')

const express = require('express');
const path = require('path'); // built-in path module
const app = express();
const {products} = require('./data');
//set up static and middleware
app.get('/',(req,res) => {
    res.send('<h1>Home page</h1> <a href="/api/products">Products</a>');
});

app.get('/api/products',function(req,res){
    const newProducts = products.map(function(product){
        const {id,name,image} = product;
        return {id,name,image};
    });
    res.send(newProducts);
});

app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params; // get request parameter like localhost:5000/api/products/4 -> 4 is req parameter
    const singleProduct = products.find(function(product){
        if (product.id===Number(productID)){ // use find in js 
            return product; // if product.id == request parameter return that product obj
        }
    });
    res.send(singleProduct);
});
app.all('*',function(req,res){
    res.status(404).send("404 not found");
});
app.listen(5000, function(){

    console.log("server is good");
});

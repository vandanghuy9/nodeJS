// console.log('Express Tutorial')

const express = require('express');
const path = require('path'); // built-in path module
const app = express();
//set up static and middleware
app.use(express.static('./public'));
//static: the file server doesn't have to change
//folder of those file usually public(image.js,css);
// if load static web (html,css,public) only, put index.html to public folder too, change dir in index.html and use static

// app.get('/',function(req,res){
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
// });

app.all('*',function(req,res){
    res.status(404).send("404 not found");
});
app.listen(5000, function(){

    console.log("server is good");
});

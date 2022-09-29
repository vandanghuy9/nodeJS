/ console.log('Express Tutorial')

const http = require('http');

const fs = require('fs');
// in createServer method we have a callback with 2 augment
//req: request object
// res: response object

const homePage = fs.readFileSync('./navbar-app/index.html');
const styleHomepage = fs.readFileSync('./navbar-app/styles.css');
const imageHomepage = fs.readFileSync('./navbar-app/logo.svg');
const logicHomepage = fs.readFileSync('./navbar-app/browser-app.js');
const server = http.createServer(function(req,res){  // create server will need a callback
    const url = req.url;
    //200: status code
    //homepage
    if(url === '/'){
    res.writeHead(200,{'content-type':'text/html'}); // define response type
    res.write(homePage);
    res.end("hello"); // signal all response header and body are sent
    }
    //styles
    else if (url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'}); // define response type
        res.write(styleHomepage); // write content of file to web not passing file
        res.end(); // signal all response header and body are sent
    }
    else if (url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'}); // define response type
        res.write(imageHomepage); // write content of file to web not passing file
        res.end(); // signal all response header and body are sent
    }
    else if (url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'}); // define response type
        res.write(logicHomepage); // write content of file to web not passing file
        res.end(); // signal all response header and body are sent
    }
    else{
        res.writeHead(404,{'content-type':'text/html'}); // define response type
        res.write('<h1>404 not found </h1>')
        res.end(); // signal all response header and body are sent
    }
});

server.listen(5000);

//5000: this port is not random
// specific port for specific purposeNikki Reed

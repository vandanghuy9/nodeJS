const http = require('http');

const server = http.createServer();

server.on('request', (req,res) =>{ //server is a event of http.server class
    res.end('<h1>Hello</h1>');
});

server.listen(5000); // alot of built-in module based on event

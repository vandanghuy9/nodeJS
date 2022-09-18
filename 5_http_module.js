const http = require('http');

const server = http.createServer(function(req,res) {//request object response object
    if(req.url == '/'){
        res.end("Welcome");
    }
    if(req.url == '/about'){
        res.end("About us");
    }
    res.end("<h1>Oops</h1>");
});
// Run localhost:5000
server.listen(5000);

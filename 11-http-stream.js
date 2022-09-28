const fs = require('fs');
const http = require('http'); 
const server = http.createServer(function(req,res){ //create server
    const stream = fs.createReadStream('./js/test.txt','utf-8'); // read file as stream
    stream.pipe(res); //use pipe to write data to response object
});

server.listen(5000);

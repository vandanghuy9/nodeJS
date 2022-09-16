const fs = require('fs');
// Read file asynchronous
console.log("Start printing: ");
const readFile = fs.readFile('./test.txt','utf-8',function(err,result){
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});

console.log("Done task");

// Result: 
// Start printing 
// Done task
// Here is a new line: Van Dang Huy
// Here is a new line: Van Dang Huy

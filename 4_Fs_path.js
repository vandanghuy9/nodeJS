const fs = require('fs'); // fs is built-in module to read file
 const readFile = fs.readFileSync('./test.txt','utf-8');
 console.log(readFile);

 fs.writeFileSync('./test.txt',"Here is a new line: Van Dang Huy"); // overwriting file

 fs.writeFileSync('./test.txt',"Here is a new line: Van Dang Huy",{flag: 'a'}); //concatenate file

const { createReadStream } = require('fs');

// default read 64kb
// if want to extend the buff 
//  const stream = createReadStream('./test.txt',{
//     highWaterMark:90000, // size to expend
//     encode: 'utf8' // encode
// } ); 

const stream = createReadStream('./test.txt');

stream.on('data',(result) =>{
    console.log(result.length); // this helps to read data from file as a big chunk and don't have to store data in a variables
});

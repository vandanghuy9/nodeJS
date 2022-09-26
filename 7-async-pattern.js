// different ways to write async function
// async pattern

// 1. use await async
const {readFile,writeFile} = require('fs').promises;//fs: file system

const start = async function(){

    try{
        const read = await readFile('./js/test.txt');
        await writeFile('./js/newfile.txt',"Write file async",{flag:'a'});
        console.log(read);
    }catch(error){
        console.log(error);
    }
};
start();

// 2. use promise

// const getText = function(path){
    // return new Promise(function(resolve,reject){  //promise automatically have 2 argument resolve and reject
//         readFile(path,'utf-8',function(err,data){ // producing code (may take time)
//             if(err){
//                 console.log(err);
//                 reject(err); // reject is used when error
//             }else{
//                 resolve(data); // resolve is used when successful
//             }
//         });
//     });
// };

// getText('./js/test.txt')
//     .then(function(result){console.log(result);}) //promise function has then to handle resolve result
//     .catch(function(err){console.log(err);} // catch when has error
//     );

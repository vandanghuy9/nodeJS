// use modules in node 
// Repeat: NODE doesn't have WINDOW OBJECT, only GLOBAL OB
const name1 = "huy";
const name2 = "van";
function sayHi(name){
    console.log("Hello "+name);
}


module.exports.sayHi = sayHi; 
module.exports.name1 = name1;
module.exports.name2 = name2;
console.log(module);

// This means global exports object in module has a func sayHi 
// and 2 var name1 name2

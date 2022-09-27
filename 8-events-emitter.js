const EvenEmitter = require('events'); //events module 

const customEmitter = new EvenEmitter(); // events are core of nodejs

customEmitter.on('response',function(name,id){
    console.log("data received " + name +id);
});

customEmitter.emit('response','john',34);


customEmitter.on('response',function(){
    console.log("something here");
});

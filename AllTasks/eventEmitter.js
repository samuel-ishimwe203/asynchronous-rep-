
const emitter= require("events");
const eventEmitter= new emitter();

eventEmitter.on('login',(usesr)=>{
console.log(`${user} logged in please`)
})

eventEmitter.emit('logixn','samuel')


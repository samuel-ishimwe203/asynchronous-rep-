
const emitter= require("events");
const eventEmitter= new emitter();

eventEmitter.on('login',(user)=>{
console.log(`${users} logged in please`)
})

eventEmitter.emit('logixn','samuel')


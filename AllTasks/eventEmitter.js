
const emitter= require("events");
const eventEmitter= new emitter();

eventEmitter.ons('login',(user)=>{
console.log(`${user} logged in please`)
})

eventEmitter.emit('logixn','samuel')


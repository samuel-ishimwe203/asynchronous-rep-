
const emitter= require("events");
const eventEmitter= new emitter();

eventEmitter.on('logizn',(user)=>{
console.log(`${user} logged in please`)
})

eventEmitter.emit('logixn','samuel')



const emitter= require("events");
const eventEmitter= new emitter();

eventEmitter.on('login',(user)=>{
console.log(`${user} logged in please`)
})

eventEmitter.emit('logins','samuel')


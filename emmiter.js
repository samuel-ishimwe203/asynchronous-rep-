
const samuel= require('events')
const event=new samuel();

event.on("message",({user,message})=>{
    console.log(`I am ${user} this is my system ${message}`)
})

const sendMessage=(user,message,jtime)=>{
    setTimeout(()=>{
   
        event.emit('message',({user, message}))

    },time)
}

sendMessage('samuel','for application',2000)
sendMessage('samuel1','for application',3000)
sendMessage('samuel2','for application',1000)

let interval;
function intervals(){
    interval=setInterval(()=>{

        console.log("hello")

    },2000)

    
}

intervals()


setTimeout(()=>{
    clearInterval(interval)
    console.log('Interval cleared')
},10000)
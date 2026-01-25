
// let interval;
// function intervals(){
//     interval=setInterval(()=>{

//         console.log("hello")

//     },2000)

    
// }

// intervals()


// setTimeout(()=>{
//     clearInterval(interval)
//     console.log('Interval cleared')
// },10000)


async function funct1(){
    setTimeout(()=>{
        console.log('A')
    },1000)
}

funct1()

async function funct2(){
    setTimeout(()=>{
        console.log('')
    },1000)
}




funct2()

async function funct3(){
    setTimeout(()=>{
        console.log('B')
    },1000)
}


funct3()



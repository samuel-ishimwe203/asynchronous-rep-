// asynchronous and parallel programming

// Example of asynchronous 

// console.log('start');

// setTimeout(()=>{
//     console.log('now async is finished')
// },4000)

// console.log('End')

Promise.allSettled([new Promise(resolve=>resolve("done")),new Promise((_,reject)=>reject("fail"))]).then(data=>console.log(data))

// function blockForSecond(){
//     const start=Date.now();
//     while(Date.now()-start<1000){

//     }
// }

// console.log("start");
// blockForSecond();
// console.log('1 second later');


// // function calls are also synchronous

// function greet(){
//     console.log("Hello!");
// }

// console.log("start");
// greet();
// console.log("end");

// call stack
 
// function first(){
//     console.log('I am the first funciton');

// }

// function second(){
    
//     console.log('I am the second function');
//     first();
// }

// second();


// an other example

// function a(){
//     b();
//     console.log('Function A');
// }

// function b(){
//     c();
//     console.log('Function B');
// }
// function c(){
//     console.log('Function C');
// }

// a();

// blocking 

// console.log("Start");

// while(true){

// }
// console.log("End");


// non-blocking

// console.log("I am student 1");
// setTimeout(()=>{
//     console.log(`This is samuel's message after 3 seconds`);

// },3000);
// console.log("nibyo san");
// synchronous callbacks 

// function great(name, callback){
//     console.log(`Hello , ${name}`);
//     callback

// }

// great('Alice', ()=>{
//     console.log("This is a callback function");
// })


// simple code that shows how event loo works 

console.log("A")
setTimeout(()=>{
    console.log("B")
},0)

Promise.resolve().then(()=>{
    console.log("C")
})

console.log("D")

//microtask inside the macrotask

setTimeout(()=>{
    console.log('A')

    Promise.resolve().then(()=>{
        console.log('B')
    })

    console.log("C")
},0)


// callback example

function doTask(callback){
    setTimeout(()=>{
      callback('task finished ')
    },1000)
}

doTask((message)=>{
    console.log(message)
})

console.log('Task started')


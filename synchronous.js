
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
 
function first(){
    console.log('I am the first funciton');

}

function second(){
    
    console.log('I am the second function');
    first();
}

second();


// an other example

function a(){
    b();
    console.log('Function A');
}

function b(){
    c();
    console.log('Function B');
}
function c(){
    console.log('Function C');
}

a();

// blocking 

// console.log("Start");

// while(true){

// }
// console.log("End");


// non-blocking

console.log("I am student 1");
setTimeout(()=>{
    console.log(`This is samuel's message after 3 seconds`);

},3000);
console.log("nibyo san");
// synchronous callbacks 

function great(name, callback){
    console.log(`Hello , ${name}`);
    callback

}

great('lice', ()=>{
    console.log("This is a callback function");
})
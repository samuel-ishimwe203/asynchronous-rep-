
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
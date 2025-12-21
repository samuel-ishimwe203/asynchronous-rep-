
function blockForSecond(){
    const start=Date.now();
    while(Date.now()-start<1000){

    }
}

console.log("start");
blockForSecond();
console.log('1 second later');


// function calls are also synchronous

function greet(){
    console.log("Hello!");
}

console.log("start");
greet();
console.log("end");
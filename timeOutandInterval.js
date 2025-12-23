
// setTimeout function

// function greet(name){
//     setTimeout(()=>{
//          console.log(`hello my name is ${name}`)

//     },2000)

    
   
// }

// greet("samuel")

// setInterval function

// function interval(){
//  let a=1;
// for(a=1; a<=5;a++){
//     console.log(a)
//  }

// }
// interval()


// callbacks
 
function foo(name){
    console.log(`Hello ${name}`)
}

function fooCall(namefn){
    const name='mucyo'
    namefn=name
}

fooCall(foo)
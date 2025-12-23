
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
    namefn(name)
}

fooCall(foo)

// promise static method

const promise1= Promise.resolve(50)
const promise2= 34;
const promise3= new Promise((resolve, reject)=>{
    setTimeout(, 2000, 'samuel')
})

Promise.all([promise1, promise2, promise3]).then(result=>
    console.log(result)
)
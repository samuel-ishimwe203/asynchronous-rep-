
// setTimeout function

// function greet(name){
//     setTimeout(()=>{
//          console.log(`hello my name is ${name}`)

//     },2000)

    
   
// }

// greet("samuel")

// setInterval function

function interval(){
 let a=1;
for(a=1; a<=5;a++){
    if(a===4){
        setInterval(()=>{
   console.log(a)
        },2000)
    }
 
 }

}
interval()
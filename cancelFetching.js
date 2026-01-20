
// how to stop fetching


const controller= new AbortController;


(async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    const result=await response.json()
    console.log(result);

})()

setTimeout(()=>{
    controller.abort()
    console.log('cancelled')
},100s0)

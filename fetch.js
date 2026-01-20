
async function fetch1(data){
   const result= await fetch(data)
   return await result.json();
    
}

fetch1('https://jsonplaceholder.typicode.com/posts')
.then((result)=>console.log(result))
.catch((error)=>console.log(error))






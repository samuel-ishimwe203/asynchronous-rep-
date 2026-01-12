let url='http://localhost:3000/api/users';

async function fetch1(){
    try{

    
    const response= await fetch(url,{});

    if(!response.ok) throw new Error(`failed to fetch data from`)
    const data = await response.json() 
   console.log(data)  
}catch(error){
    console.log(error.message)


}}
fetch1()
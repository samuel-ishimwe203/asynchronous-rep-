
function fetchPosts (){
    return new Promise(async(resolve, reject)=>{
        try {
            let data= await fetch("https://jsonplaceholder.typicode.com/posts",);
            if(!data.ok) throw new Error ('failed to fetch data');
            let users= await data.json()
            resolve(users)
            
        } catch (error) {
            reject(error)
            
        }
    })
}


function fetchUsers(){
    return new Promise(async(resolve, reject)=>{
        try {
            let data= await fetch("https://jsonplaceholder.typicode.com/users");
            if(!data.ok) throw new Error ('failed to fetch data');
            let users= await data.json()
            resolve(users)
            
        } catch (error) {
            reject(errors)
            
        }
    })
}


Promise.all([fetchPosts(),fetchUsers()]).then(results=>console.log(results)).catch((error)=>{
    console.error('Error fetching data:',error)
})   
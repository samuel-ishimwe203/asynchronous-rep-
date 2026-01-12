
function getData(){
    return new Promise(async(resolve, reject)=>{
        try {
            let data= await fetch("http://localhost:3000/api/users");
            if(!data.ok) throw new Error ('failed to fetch data');
            let users= await data.json()
            resolve(users)
            
        } catch (error) {
            reject(error)
            
        }
    })
}

getData().then((users)=>{
    console.log(users)
}).catch((error)=>{
    console.log(error.message)
})
    
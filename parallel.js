
 function getPost(){


return new Promise(async(resolve, reject)=>{

    try {
         const data = await fetch('https://jsonplaceholder.typicode.com/posts');
         if(!data.ok) throw new Error('failed to fetch data');
         const result=await data.json()
         resolve(result)
        
    } catch (error) {
        reject(error)
        
    }
})
    }

function getAnother(){
    return new Promise(async(resolve, reject)=>{
        try {

            const response= await fetch('https://jsonplaceholder.typicode.com/users')
            if(!response.ok) throw new Error('failed to fetch');

            const result=await response.json()
            resolve(result);
            
        } catch (error) {
            reject(error)
            
        }
    })
}

function getThiss


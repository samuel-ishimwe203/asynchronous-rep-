
async function getSamData() {

    try {

         const response= await fetch('http://localhost:4000/api/sam/data');
         if(!response.ok)throw new Error('failed to fetch data');
         const data = await response.json()
         return data
        
    } catch (error) {

        return error.message
        
    }
    
}


getSamData().then(data=>console.log(data)).catch(error=>console.error(error));
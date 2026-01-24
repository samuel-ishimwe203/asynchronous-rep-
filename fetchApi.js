
async function getUser() {

    try {
               const fetch1= await fetch('https://jsonplaceholder.typicode.com/users')
               if(!fetch1.ok) throw new Error('failed to fetch data');
               const data = await fetch1.json();
             

                return data

            
        } catch (error) {
           return error
            
        }
     }

   


     async function getTodos() {

    try {
               const fetch1= await fetch('https://jsonplaceholder.typicode.com/todos')
               if(!fetch1.ok) throw new Error('failed to fetch data');
               const data = await fetch1.json();
                

                return data

           
            
        } catch (error) {
            return error
            
        }
     }




    async function getComment() {

    try {
               const fetch1= await fetch('https://jsonplaceholdesr.typicode.com/comments')
               if(!fetch1.ok) throw new Error('failed to fetch data');
               const data = await fetch1.json();
              return data
            
        } catch (error) {
            return error;
            
        }
     }

async function FetchAll (){
    const res = Promise.ra([ getUser(),getTodos(),getComment()])
    return res;
}

    

FetchAll().then((result)=>{
    console.log(result)
}).catch(error=>{
    console.error(error)
})
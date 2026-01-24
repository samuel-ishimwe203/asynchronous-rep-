
async function getUser() {

    try {
               const fetch1= await fetch('https://jsonplaceholder.typicode.com/users')
               if(!fetch1.ok) throw new Error('failed to fetch data');
               const data = await fetch1.json();
              setTimeout(()=>{

                console.log(data)

              },1000) 
            
        } catch (error) {
            console.log(error)
            
        }
     }

     getUser()


     async function getTodos() {

    try {
               const fetch1= await fetch('https://jsonplaceholder.typicode.com/todos')
               if(!fetch1.ok) throw new Error('failed to fetch data');
               const data = await fetch1.json();
                 setTimeout(()=>{

                console.log(data)

              },3000) 
            
        } catch (error) {
            console.log(error)
            
        }
     }

   getTodos()



    async function getComment() {

    try {
               const fetch1= await fetch('https://jsonplaceholder.typicode.com/comments')
               if(!fetch1.ok) throw new Error('failed to fetch data');
               const data = await fetch1.json();
                 setTimeout(()=>{

                console.log(data)

              },5000) 
            
        } catch (error) {
            console.log(error)
            
        }
     }

   getComment()

    
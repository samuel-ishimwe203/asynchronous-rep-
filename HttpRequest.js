// the way of fetching data using callback and callback hell
// const doTask=(resource,callback)=>{
//     const request = new XMLHttpRequest()

// request.addEventListener('readystatechange',()=>{
   
//     if(request.readyState===4 && request.status===200){
//          const data= JSON.parse( request.responseText)
//         callback(undefined,data)
//     }else if(request.readyState===4){
//         callback('data not fetched', undefined)
//     }
// })
// request.open('GET',resource)
// request.send()

// }


// doTask('jsonData/todos.json',(error, data)=>{
//     console.log(data)

//     doTask('jsonData/murisa.json',(error,data)=>{
//         console.log(data);
//         doTask('jsonData/mucyo.json',(error, data)=>{
//             console.log(data)
//         })
//     })
// });


// now here is upgraded easy way of fetching data using promise




// const toDos=(resource)=>{

//     return new Promise((resolve, reject)=>{

//         const request =new XMLHttpRequest();
//         request.addEventListener('readystatechange',()=>{
          
//             if(request.readyState===4 && request.status===200){
//                    const data= JSON.parse(request.responseText);
//                    resolve(data)
//             }else if(request.readyState===4){
//                 reject('please failed to fetch data')
//             }
                
            
//         })

//         request.open('GET', resource);
//         request.send()
//     })
// }


// toDos('jsonData/murisa.json').then(data=>{
//      console.log('promise resolved :', data)
//      return toDos('jsonData/mucyo.json');

// }).then(result=>{
//     console.log('the promise 2 resolved', result)
//     return toDos('jsonData/murisa.json')
// }).then(result=>{
//     console.log('promise 3 resolved ',result)
// }).catch(error=>{
//     console.log(error)

// })

// by fetching api


fetch('jsonData/todos.json').then(response=>{
    // console.log('resolved', response)
    return response.json()
}).then(data=>{
    console.log('The promise 1 resolved',data)
     fetch('jsonData/mucyo.json')
     return data.json()
}).then(data=>{
    console.log('The promise 2 resolved',data)
     fetch('jsonData/murisa.json')
     return data.json()
}).then(data=>{
    console.log('The promise 3 resolved',data)
    return data.json()
}).catch(error=>{
    console.log('rejected',error)
})
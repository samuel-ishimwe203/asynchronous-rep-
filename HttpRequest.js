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




const doTask=(resource)=>{

          return new Promise((resolve , reject)=>{

                     const request = new XMLHttpRequest()

                     request.addEventListener('readystatechange',()=>{
   
                           if(request.readyState===4 && request.status===200){
                                   const data= JSON.parse( request.responseText)
                                   resolve(data)
                            }else if(request.readyState===4){
                              
                              reject('failed , data not fetched')
    }
})

request.open('GET',resource)
request.send()

    })


}

doTask('jsonData/todos.json').then(result=>{
    console.log('The promise1 resolved',result);
    return doTask('jsonData/murisa.json')
}).then(result=>{
    console.log('The promise2 resolved ',result)

    return doTask('jsonData/mucyo.json')
}).then(result=>{
    console.log('The promise3 rejected ',result)
}).catch(error=>{
    console.log('The promise rezjected', error)
}




const doTask=(resource,callback)=>{
    const request = new XMLHttpRequest()

request.addEventListener('readystatechange',()=>{
   
    if(request.readyState===4 && request.status===200){
         const data= JSON.parse( request.responseText)
        callback(undefined,data)
    }else if(request.readyState===4){
        callback('data not fetched', undefined)
    }
})
request.open('GET',resource)
request.send()

}


doTask('jsonData/todos.json',(error, data)=>{
    console.log(data)
});


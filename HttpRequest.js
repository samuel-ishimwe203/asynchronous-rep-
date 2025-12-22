
const doTask=(callback)=>{
    const request = new XMLHttpRequest()

request.addEventListener('readystatechange',()=>{
    if(request.readyState===4 && request.status===200){
        callback(undefined, request.responseText)
    }else if(request.readyState===4){
        callback('data not fetched', undefined)
    }
})
request.open('GET','https://jsonplaceholder.typicode.com/todos/')
request.send()

}


doTask((error, data)=>{
    console.log('callback faired')
    if(error){
        console.log(error)
    }
    else{
        console.lo
    }
})


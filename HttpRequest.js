
const doTask=(callback)=>{
    const request = new XMLHttpRequest()

request.addEventListener('readystatechange',()=>{
    
    if(request.readyState===4 && request.status===200){
        const data= JSON.parse(request.responseText);
        callback(undefined,data)
    }else if(request.readyState==4){
        callback('data not fetched', undefined)
    }
})
request.open('GET','todos.json')
request.send()
}


doTask((error, data)=>{
    console.log('callback faired')
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})



const Apis=[
'https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2',
'https://jsonplaceholder.typicode.com/todos/3'
];


const samuelFetchAll=async ()=>{
    const ArrayResult= await Promise.allSettled(Apis.map(ele=>fetch(ele).then(result=>result.json())))
    console.log( ArrayResult)

    ArrayResult.forEach((res,index)=>{
        if(res.status==='fulfilled'){
            console.log(`Apis number iss : ${index+1} and the response is ${res.value}`)
        }
        else{
             console.log(`Apis number is : ${index+1} and the response is ${res.reason}`)

        }
    })
}
samuelFetchAll()
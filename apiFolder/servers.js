
const express= require('express');
const app=express();


const port= 4000;

app.get('/api/sam/data',(req,res)=>{

    res.json({
        name: 'samuel',
        email:'samuel@gmail.com'
    
    })

})



zapp.listen(port, ()=>{
    console.log(`server is running on:`,port);
})


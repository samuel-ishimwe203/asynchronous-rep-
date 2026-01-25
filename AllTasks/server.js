
let express= require("express")
let app = express()
app.use(express.json())

app.get("/api/users",(req,res)=>{
    res.json([
        {id:1, name:"samuel"},
        {id:1, name:"samuel"},
        {id:1, name:"samuel"},
        {id:1, name:"samuel"},
        {id:1, name:"samuel"},
        {id:1, name:"samuel"},
    ])
})

app.post("/user",(req,res)=>{
    let user= req.body;
    console.log({message:"recieved user data", user});

})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})

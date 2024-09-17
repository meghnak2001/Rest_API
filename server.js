const express=require('express')
const color=require('colors')
const mariDbPool = require('./config/db')
const router = require('./routes/user.route')
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)

app.get('/greet',(req,res)=>{
    res.status(200).send("Hello")
})

const port=8000;

mariDbPool.query("SELECT 1")
.then(()=>{
    console.log("Database Connect".bgRed.black)
    app.listen(port,()=>{
        console.log("Server Start at port 8000".bgCyan.white)
    })
})
.catch((e)=>{
    console.log("Connection Faield",e)
})
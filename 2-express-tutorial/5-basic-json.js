const express=require('express');
const app=express();

const {products}=require('./2-express-tutorial/data.js')
app.get('/',(req,res)=>{
res.json(products)
})

app.get('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(5001,()=>{
    console.log("listening to the port 5001...");
});
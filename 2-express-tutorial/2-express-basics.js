const express=require('express')

const app=express();

app.get('/',(req,res)=>{
  res.status(200).send('Home Page!');
})
app.get('/about',(req,res)=>{
  res.status(200).send('About Page!!');
})

app.get('*',(req,res)=>{
  res.status(404).send('<h1>Resource cannot be found</h1>');
})

app.listen(5001,()=>{
  console.log('app listens to the server 5001...');
})
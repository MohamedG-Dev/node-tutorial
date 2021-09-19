const express=require('express');
const app=express();
const logger=require('./2-express-tutorial/logger');
// req => middleware => res
//app.use('/api',logger);
app.use(logger)

app.get('/',(req,res)=>{
    res.send('Home');
})

app.get('/about',(req,res)=>{
    res.send('About');
})

app.get('/api/products',(req,res)=>{
    res.send('Products');
})

app.get('/api/items',(req,res)=>{
    res.send('Items');
})
app.listen(5001,()=>{
    console.log('Server is listening to the port 5001...')
})
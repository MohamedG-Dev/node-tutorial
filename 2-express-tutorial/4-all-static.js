const express=require('express');
const path=require('path');
const app=express();
// setup static and middleware
app.use(express.static('./2-express-tutorial/navbar-app'))
//adding static assets
//app.get('/',(req,res)=>{
//  res.status(200).sendFile(path.resolve(__dirname,'./2-express-tutorial/navbar-app/index.html'))
//})

app.get('*',(req,res)=>{
  res.status(404).send('<h1>Resource Not found</h1>');
})

app.listen(5001,()=>{
  console.log('server is listening to the port 5001');
});

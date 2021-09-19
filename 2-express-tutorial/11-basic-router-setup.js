const express=require('express');
const app=express();
const peopleRouter=require('./routes/people');
const authRouter=require('./routes/auth');
//static assests
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}));

//parse json data
app.use(express.json());

app.use('/login',authRouter)

app.use('/api/people',peopleRouter);





app.listen(5000,()=>{
    console.log("Server is listening to the port 5000...");
})
const {readFile,writeFile}=require('fs');
const { isBuffer } = require('util');
console.log("start");
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        return;
        console.log(err);
    }
    const first= result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            return;
            console.log(err);
        }
        const second=result;
        writeFile('./content/async-result.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
            if(err){
                return;
                console.log(err)
            }
            console.log("done with the task");
        })
    })
})
console.log("Starting the next one");
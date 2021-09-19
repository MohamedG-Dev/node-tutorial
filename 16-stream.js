const {createReadStream}=require('fs');
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream=createReadStream('./content/bigFile.txt',{encoding: 'utf-8'},{highWaterMark: 90000});

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(error)=>{
    console.log(error);
})
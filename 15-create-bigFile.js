// creating a big file
const {writeFileSync} = require('fs');

for(let i=0;i<1000;i++){
    writeFileSync('./content/bigFile.txt',`hello world: ${i} \n`,{flag:'a'});
}
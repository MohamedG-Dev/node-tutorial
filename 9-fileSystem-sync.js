const {readFileSync, writeFileSync}= require('fs');
console.log('start')
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');
//console.log(first,second)

writeFileSync('./content/resultFile.txt',`Here is the result: ${first}, ${second}`,{flag: 'a'});
// writeFileSync is the method used to write in to the file, it'll create a file if it's not already available
// this method also overrides the existing content is the file is already available.
// In writeFileSync method, the first argument is of the location of the file to be created.
    // the second argument is to write the content into the file.
    // we can also append texts into the file by applying another argument as "{flag: 'a'}"
console.log("done with the task");
console.log('starting the next one')

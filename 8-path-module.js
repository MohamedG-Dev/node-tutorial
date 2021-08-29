const path=require('path');
//method to get a path separator
console.log(path.sep);
// method to get the path of the file located
const filePath=path.join('/content','testFolder','test.txt');
console.log(filePath)
//method to get the base of the file path
const base=path.basename(filePath);
console.log(base);
//method to get the absolute path
const absolutePath=path.resolve(__dirname,'content','testFolder','test.txt');
// or we can also use the below method as well to get the absolute path
//const absolutePath=path.resolve(__dirname,filePath);
console.log(absolutePath)
const os=require('os');
// info about the user
const user=os.userInfo();
console.log(user)
// method that returns system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} in seconds`);

const currentOs={
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOs);
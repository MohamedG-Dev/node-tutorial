const EventEmitter=require('events');


const customEmitter=new EventEmitter();

customEmitter.on(`response`,(name,id)=>{
    console.log(`data received for user ${name} and along with it's id: ${id}`);
})

customEmitter.on(`response`,()=>{
    console.log('second data received')
})

customEmitter.emit(`response`,`john`,34);
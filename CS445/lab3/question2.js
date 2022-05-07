class Subject{
    observers ={};
    on(event, fn){
if(event in this.observers){
    this.observers[event].push(fn);
}
else{
    this.observers[event] = [fn];
}
    }
    emit(event ,message){
for(const fnc of this.observers[event]){
    fnc(message);
}
    }
}



const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}

subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445
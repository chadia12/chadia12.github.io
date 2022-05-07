

class Regular{
    constructor(){
        this.lumens = "50 -100";
        this.year = "1 year "
    }

}

class Energy{
    constructor(color){
        this.lumens ="5 - 40";
        this.year = "10 year";
        this.color = color;
    }

}

class Factory{
    createBulb(type, color){
        let bulb ;
        if(type === "regular"){
bulb = new Regular();
        }
        else if(type === "energy"){
            bulb = new Energy();
            bulb.color = color;
        }
        bulb.type = type;
        return bulb;
    }
   
}

const bulbs = [];
const factory = new Factory();

// bulbs.push(factory.createBulb("regular"));
// bulbs.push(factory.createBulb("energy", "red"));


// for (let i = 0, len = bulbs.length; i < len; i++) {
//     console.log(bulbs[i]);
// }

//QUESTION 2

class User{
constructor(name){
    this.name =name;
}
logger(){
    console.log(`User: ${this.name}`);
}

}

class DecoratedUser{
    constructor(user, street, city){
        this.user = user;
        this.street = street;
        this.name = user.name;
        this.city = city;
    }
    logger(){
        console.log(`Decorated user ${this.name}, ${this.street}, ${this.city}`);
    }

}

const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();

//QUESTION 3

class Info{
    logging(message){
console.info(message);
    }
}

class Warn{
    logging(message){
        console.warn(message);
            }

}

class Error{
    logging(message){
        console.error(message);
            }

}
class Table{
    logging(message){
        console.table(message);
            }

}

class Strategy{
action =""
    setStrategy(action){
        this.action =action;

    }
    logging(message){
return this.action.logging(message);
    }

}

// const strategy = new Strategy();

// strategy.setStrategy(new Info());
// strategy.logging('info....');

// strategy.setStrategy(new Warn());
// strategy.logging('warn....');

// strategy.setStrategy(new Error());
// strategy.logging('error....');

// strategy.setStrategy(new Table());
// strategy.logging(['table', 'table']);

//QUESTION 4
 let fibonacci =(function(){
     let memo ={};
     function fnc(number){
         let value;
         if(number in memo){
             value = memo[number];
         }
         else{
             if(number === 0 || number === 1)
             value = 1;
             else
             value = fnc(number - 1) + fnc(number -2);
             memo[number] = value;
         }
         return value;
     }
     return fnc
 }

 )();


  console.time(fibonacci(5));
  console.timeEnd(fibonacci(5));
  //8: 0.104ms

  function fibonacci1(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time(fibonacci1(5));
  console.timeEnd(fibonacci1(5));
  //8: 0.1ms

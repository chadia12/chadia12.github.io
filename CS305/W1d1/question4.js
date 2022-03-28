"use strict";

for(let i =1; i <=5; i++){
   let temp = " "
    for( let j=1; j <=5; j++){
    
        temp +=j;
    }
    console.log(temp);
}
console.log(" ")
for(let i =1; i <=5; i++){
    let temp = " "
     for( let j=1; j <=i; j++){
     
         temp +=i;
     }
     console.log(temp);
 }

 console.log(" ")
 for(let i = 5; i >= 1; i--){
    let temp = " "
     for( let j=1; j <= i; j++){
     
         temp +=i;
     }
     console.log(temp);
    }
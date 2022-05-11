"use strict";
/**eslint-disable */

Array.prototype.removeDuplicatesAsync= function(){
let arr = [];
for(let elem of this){
    if(!arr.includes(elem))
    arr.push(elem);
}
new Promise(function(resolve, reject){
resolve(arr);
}).then(res => console.log(res));
}


console.log("start");
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log("end");


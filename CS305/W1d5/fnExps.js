"use strict";

// module.exports ={double, times100, myMap};
/**
 * 
 * @param {number} num - number.
 * @returns {number} - number 2 time.
 */
function double(num) {
    return num * 2;
}



/**
 * 
 * @param {number} num - number. 
 * @returns {number} - number 100 times
 */
function times100(num){
return num * 100;
}

/**
 * 
 * @param {array} arr - arry of numbers.
 * @param {function} fnc -function call.
 * @returns {array} -array.
 */
function myMap(arr ,fnc){
let newarr = [];

  for(let elem of arr){
   newarr.push( fnc(elem));
  }
   return newarr;
    //return arr.map(fnc);
}

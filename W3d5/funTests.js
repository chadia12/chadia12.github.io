"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {array} -arr 
 * @param {function} -func 
 * @returns {array} - array.
 */
function myMap(arr, func) {
//IMPLEMENTATION NEEDED
let newarr =[];
for(let elements of arr){
    newarr.push(func(elements));
}
return newarr;
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myFilter(arr, func) {
let newarr = [];
for(let elements of arr){
    if(func(elements)){
        newarr.push(elements);
    }
}
return newarr;
}

/**
 * 
 * @param {array} -arr.
 * @param {function} -func 
 * @param {elements} -initialValue 
 * @returns {number} value.
 */
function myReduce(arr, func, initialValue) {
    for(let elements of arr){
        initialValue = func(initialValue, elements);
    }
    return initialValue ;
    }
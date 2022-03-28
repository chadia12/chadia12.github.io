"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {array} - arry element.
 * @returns {array} - array.
 */
function copyArray(arr){
    let newarr = [];
    for(let elements of arr){
        newarr.push(elements);
    }
return newarr;
}
/**
 * 
 * @param {array} arr1 - array
 * @param {array} arr2 - array
 * @returns {array} - concation of arrays 
 */
function concat(arr1, arr2){
    let newarr = [...arr1, ...arr2];
    return newarr;

}
/**
 * 
 * @param  {...any} numbers .
 * @returns {number} - minimum number.
 */
function findMin(...numbers) {
    
return Math.min(...numbers);
}
/**
 * 
 * @param  {...any} numbers .
 * @returns {number} - minimum number.
 */
 function findMax(...numbers) {
    
    return Math.max(...numbers);
    }

/**
 * 
 * @param {object} obj1 
 * @param {object} obj2 
 * @returns {object} - new object;
 */
function combineObjs(obj1, obj2){
    let newobj ={...obj1, ...obj2}
    return newobj;

}
// let arr =[3, 5, 6, 8,];
// let [x, y] = arr;

// function sum (x, y, ...more){
//     let total = x + y;
//     for(let elements of more){
//         total +=elements
//     }
// return total;
// }
// a)
function printNumbers(from, to){
    let timerNumber = setInterval(function (){
        console.log(from);
        if(from == to){
            clearInterval(timerNumber);
        }
        from++;
    }, 1000)
}

console.log(printNumbers(5, 8));

// b

function printNum(from, to){
    setTimeout(function start(){
        console.log(from);
        if(from < to){
            setTimeout(start, 1000);
        }
        from++;
    }, 1000)
}

console.log(printNum(7, 10));

// // using setTimeout

// let i = 0;

// setTimeout(() => console.log((i), 100)); // 100000000
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }
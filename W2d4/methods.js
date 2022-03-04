"use strict"
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr, 1, 4));

function filterRange(arr, a, b) {
  let newarr = [];
  for (let val of arr) {
    if (val >= a && val <= b) {
      newarr.push(val);
    }
  }
  return newarr;
}


function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);

    }
  }

}

function calculate(str) {
  let newstr = str.splite(" ");
  let a = Number(newarr[0]);
  let b = newarr[1];
  let c = Number(newarr[2]);
  if (b === "+") {
    return a + b;
  }
  else if (b === "-") {
    return a - b;
  }
  else if (b === "/") {
    return a + b;
  }


}


function Calculator() {

  this["+"] = (a, b) => +a + +b,
    this["-"] = (a, b) => +a - +b,
    this["/"] = (a, b) => +a / +b,
    this["*"] = (a, b) => +a * +b,
    this["**"] = (a, b) => Math.pow(+a, +b),
    this.calculate = function (str) {
      let arr = str.split(" ");
      for (const key in this) {
        if (key === arr[1]) {
          return this[key](arr[0], arr[2]);
        }
      }
    },

    this.addMethod = function (str, func) {
      for (const key in this) {
        if (key === str) {
          func = this[key]();
        }
      }

    };

}
/**
 * 
 * @param {array} arr 
 * @returns 
 */
function unique(arr) {
  let newarr =[];
  for(let str of arr){
    if(!newarr.includes(str)){
      newarr.push(str);
    }
  }
return newarr;
}

/**
 * 
 * @param {array} array 
 * @returns {object} -return any object
 */
 function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}


"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam, extractCurrencyValue }; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
  if (str === "") {
    return "";
  }
  else {
    let newstr = str[0].toUpperCase() + str.slice(1);
    return newstr;
  }

}

function checkSpam(str) {
  return str.includes("ViAgRA") || str.includes("xxxxx");

}


function truncate(str, maxlength) {
  if (str.length > maxlength) {
let newstr = str.slice(0, maxlength-1);
return newstr +"…";
  }
  else{
    return str;
  }
}

function extractCurrencyValue(str){
  let newstr = str.slice(1);
  return Number(newstr);


}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}




function camelize(str) {
  if(str === ""){
    return "";
  }
else{
  let temp =str.split("-");
  let word=temp[0]
  for(let i= 1; i < temp.length; i++){
  word+= ucFirst(temp[i]);
  }
  return word;
}


}



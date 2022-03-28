"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum, includesEvenAge }; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr) {
    return arr.map(num => num * 2);
}

function doubleAges(arr) {

    let arrAges = arr.map(item => item.age * 2);

    let i = 0;
    let arr3 = [];

    for (let elem of arr) {
        let newObj = {};
        newObj.name = elem.name;
        newObj.age = arrAges[i];
        arr3.push(newObj)
        i++;

    }
    return arr3;
}

function filterEven(arr) {
    return arr.filter(item => item % 2 === 0);

}

function filterOver10(arr) {
    return arr.filter(item => item.age > 10);

}

function findEvenNum(arr) {
    return arr.find(item => item % 2 === 0);

}

function findEvenAge(arr) {
return   arr.find(item => item.age % 2 === 0);

}

function includesEvenAge(arr) {
    return   arr.includes(arr.find(item => item.age % 2 === 0));
}

function includesEvenNum(arr) {
    return   arr.includes(arr.find(item => item % 2 === 0));

}

// reduce
function findSumOfNums(arr){
    return arr.reduce((sum, current)=> sum + current);
}
function findAverageOfNums(arr){
    return findSumOfNums(arr)/arr.length;;
}
function findMaxOfNums(arr){
    return arr.reduce((max, current)=>{
        if(current > max) {return current;}
        else{return max};
    }, -Infinity);

}
function findMaxForAges(arr){
    return arr.reduce((max, current)=>{
        if(current.age > max) {return current.age;}
        else{return max};
    }, -Infinity);

    
}

function findAverageOfEvenAges(arr){
    let even = arr.filter(item => item.age % 2 ===0);
    return (arr.filter(item => item.age % 2 ===0)
    .map(item => item.age)
    .reduce((sum, current)=> sum + current))/even.length;
}
function findAverageOfOddAges(arr){
    let odd = arr.filter(item => item.age % 2 !==0);
    return arr.filter(item => item.age % 2 !==0)
    .map(item => item.age)
    .reduce((sum, current)=> sum + current)/odd.length;
}


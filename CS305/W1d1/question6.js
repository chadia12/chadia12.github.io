"use strict";
const prompt = require("prompt-sync")();

let num = prompt("Enter number: ");
let sum =0;
while(num !== 0){
    sum = sum + num % 10;
    num = Math.floor(num / 10);
}
console.log(sum);
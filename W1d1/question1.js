"use strict";
const prompt = require("prompt-sync")();
let sales =prompt("Enter sales: ");
 let isSalaried = true;
 if(isSalaried){

if(sales < 300){
    console.log("These is no commission")
}
else if( sales >300 && sales < 500){
    console.log(sales * 0.01)
}
else {
    console.log(sales * 0.02)
}

 }
 else{

     if( sales >300 && sales < 500){
        console.log(sales * 0.02)
    }
    else {
        console.log(sales * 0.03)

 }
 }
//
//
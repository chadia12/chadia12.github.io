/*

          Input                                      Processing                            Output
   -----------------------------------------------------------------------------------------------------
       prompt user:           |     - if cost less than 50k then                 |    down payment amount
                              |       compute 5% of the cost                     |
       - house cost           |     - if cost is between $50K and 100K then      |
                              |       compute 1000 + 10% of (cost - $50K)        |              
                              |     - if cost is between 100K and 200K then      | 
                              |          compute 2000 + 15% of (cost - $100K)    |
                              |      - if cost is above 200k then                |
                              |         compute $5000 + 10% of (cost - $200K)    |


*/
"use strict";
const prompt = require("prompt-sync")();

let cost = prompt("Enter the cost of house: ");

let downPayment ="" ;
if(cost < 50000){
    downPayment = cost * 0.05;
}
else if (cost < 100000){
    downPaymen =  1000 + 0.1 * (cost - 50000);
}
else if(cost < 200000){
    downPayment = (2000 + 0.15 * (cost - 100000)) ;
}
else{
    downPayment = (5000 +  0.1 * (cost - 200000));
}
console.log("The down payment is " + downPayment);
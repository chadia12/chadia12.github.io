/*
Input	                                  processing	                                                      output
--------------------------------------------------------------------------------------------------------------------------------------------
•	initial amount Annual       |    •	compute the user compound Interest monthly which will be equal to  |    • compounds interest monthly
•	annual interest rate        | initial amount Annual multiply by 1 plus annual interest rate            |
•	number of years to compound | power number of years to compound minus initial amount Annual            |	  	  



*/

"use strict";
const prompt = require("prompt-sync")();

    let intialAmount = prompt ("Enter initial amount: ");
    let annualInterestRate = prompt ("Enter Annual interest ratet: ");
    let yearCompound = prompt("Enter Year Compount: ");

    let compoundsInterestMonthly = intialAmount * ( 1 + ( annualInterestRate / 12 )) ** ( yearCompound * 12) - intialAmount;

console.log(compoundsInterestMonthly)

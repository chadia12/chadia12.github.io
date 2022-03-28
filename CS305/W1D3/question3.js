"use strict";

module.exports = {returnBalance};
/** 
* @param {number} intialAmount  intial Amount.
* @param {number} annualInterestRate  Annual Interest Rate.
* @param {number} yearCompound Compound in year.
* @returns {number} the balance. 
*/ 
function returnBalance(intialAmount, annualInterestRate,yearCompound){
    let balance = intialAmount;

    let monthlyInterest = annualInterestRate / 100 / 12;
    let year = yearCompound * 12;

for(let i= 1; i <= year; i++){

    balance = Number (balance + (balance * monthlyInterest));
}
 
balance = balance.toFixed(2);
return balance;
}
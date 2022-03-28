"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount;

class Bank {
    constructor() {
        this._accounts = [];
    }
    static nextNumber = 1;
    addAccount() {
        const accountNumber = Bank.nextNumber;
        Bank.nextNumber++;
        this._accounts.push(new Account(accountNumber));
        return accountNumber;
    }

    addSavingsAccount(interest) {
        const accountNumber = Bank.nextNumber;
        Bank.nextNumber++;
        this._accounts.push(new SavingsAccount(accountNumber, interest));
        return accountNumber;

    }
    addCheckingAccount(overdraft) {
        const accountNumber = Bank.nextNumber;
        Bank.nextNumber++;
        this._accounts.push(new CheckingAccount(accountNumber, overdraft));
        return accountNumber;
    }
    closeAccount(number) {

        let accNumber = this._accounts.find((item) => item.getNumber() === number)
        let accIndex = this._accounts.indexOf(accNumber);
        this._accounts.splice(accIndex, 1);
    }
    accountReport() {
        let report = "";
        // for (let i = 0; i < this._accounts.length; i++) {
        //     if ('_interest' in this._accounts[i]) {
        //         report += "SavingsAccount " + this._accounts[i].getNumber() + ": balance: " + this._accounts[i].getBalance() + " interest: " + this._accounts[i].getInterest();
        //     } else {
        //         report += "\nCheckingAccount " + this._accounts[i].getNumber() + ": balance: " + this._accounts[i].getBalance() + " overdraft limit: " + this._accounts[i].getOverdraft() + "\n";

        //     }
        // }
        for(let elem of this._accounts){
            report += elem.toString()+ "\n";
        }

        return report;

    }
    endOfMonth() {
        let monthlyReport = "";
        // for (let i = 0; i < this._accounts.length; i++) {
        //     if (i == this._accounts.length - 1) {
        //         monthlyReport += `${this._accounts[i].endOfMonth()}`

        //     } else {

        //         monthlyReport += `${this._accounts[i].endOfMonth()}\n`
        //     }
        for(let elem of this._accounts){
            monthlyReport += elem.endOfMonth()+ "\n";
        }

        
        return monthlyReport;

    }

}














/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.Bank = Bank;










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.Bank = Bank;
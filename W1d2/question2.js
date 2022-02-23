
/*
Input	                                  processing	                                                      output
--------------------------------------------------------------------------------------------------------------------------------------------
•	initial amount Annual       |    •	compute the user compound Interest monthly which will be equal to  |    • balance interest monthly
•	annual interest rate        | initial amount Annual multiply by 1 plus annual interest rate            |
•	number of years to compound | power number of years to compound minus initial amount Annual            |	  	  
*/
  
  
  
  
  console.log("expect 110.47:", returnBalance(100, 10, 1));
    
 console.log("expect 16470.09:", returnBalance(10000, 5, 10));


function returnBalance(intialAmount, annualInterestRate,yearCompound){
        let balance = intialAmount;

        let monthlyInterest = annualInterestRate / 100 / 12;
        let year = yearCompound * 12;
   
    for(let i= 1; i <= year; i++){

        balance = Number (balance + (balance * monthlyInterest));
    }
     
  balance = balance.toFixed(2)
return balance;
}


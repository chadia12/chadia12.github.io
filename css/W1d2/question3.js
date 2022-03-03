"use strict";
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

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));
/**
 * 
 * @param {number} cost - cost of house.
 * @returns {number} - the down payment for house.
 */
function calcDownpayment(cost){
    
if(cost < 50000){
    return  (cost * 0.05);
}
else if (cost < 100000){
    return  ( 1000 + 0.1 * ( cost - 50000 ));
}
else if(cost < 200000){
    return  ( 2000 + 0.15 * (cost - 100000 )) ;
}
else{
    return ( 5000 +  0.1 * (cost - 200000));
}


}
"use strict";
const assert = require("assert");
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
    return  ( 2500 + 0.1 * ( cost - 50000 ));
}
else if(cost < 200000){
    return  ( 7500 + 0.15 * (cost - 100000 )) ;
}
else{
    return ( 20000 +  0.1 * (cost - 200000));
}


}

describe("calcDownpayment", function () {
    it("calcDownpayment 2000", function () {
        assert.equal(calcDownpayment(40000), 2000);

    });
    it("calcDownpayment 2500", function () {
        assert.equal(calcDownpayment(50000), 2500);

    });
    it("calcDownpayment 7500", function () {
        assert.equal(calcDownpayment(100000), 7500);

    });
    it("calcDownpayment 25000", function () {
        assert.equal(calcDownpayment(250000), 25000);

    });
});
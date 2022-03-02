"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 

 *
 */
/**
 * 
 * @param {*} initialValue -initial value
 * @param {*} increment - increment
 *  @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment) {
   this.currentValue = initialValue;
   this.increment = increment;
   this.accumulate = function () {
      this.currentValue = this.currentValue + this.increment;
   };
   this.report = function () {
      return this.currentValue;
   };


}

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
   this.setValues = function (a, b) {
      this.a = a;
      this.b = b;
   };
   this.sum = function () {
      return this.a + this.b;
   };

   this.mul = function () {
      return this.a * this.b;
   };

}





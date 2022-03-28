"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
return function (rang){
  return arr.includes(rang);
};
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
  
  return function (num){
    return ( num >= low &&  num <= high ); 
    
  };
  


}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){

return ((a, b) => a[fieldName] > b[fieldName] ? 1 : -1);

}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let idx = i;
    let shooter = function() { // create a shooter function,
      console.log ("I'm shooter", idx ); // that should show its number
   return idx;
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;

  }

  let army = makeArmy();
  
  army[0](); // the shooter number 0 shows 10
  army[5](); // and number 5 also outputs 10...

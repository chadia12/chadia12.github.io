"use strict";

const calculator = {
    setValues: function(a,b){
       this.a = a;
       this.b = b;
    },
sum: function (){
           return this.a + this.b;
       },
       mul: function(){
           return this.a * this.b;
       }
    
};  // implement this
/**
 * 
 * @returns 
 */







/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
//module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests
"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests


function topSalary(salaries) {
  let max = 0;
  let name = null;
  for(let [key, value] of Object.entries(salaries)){
  if(Object.entries(salaries).length == 0 ){
    return null;
  }
  else{

  if(max < value){
    max = value;
    name = key;
  }
  
    }
}

return name;
  }
   // JSON FILE
   let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  let json = JSON.stringify(salaries);
  console.log("Json string file: " + json);

  // return back to object

  let userclone = JSON.parse(json);

  console.log( userclone);
  
 
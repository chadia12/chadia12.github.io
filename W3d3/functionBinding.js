"use strict";
//Bound function as a method

/**
 * @returns {*} return.
 */
function f() {
    alert( this );  null
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();

  //Second bind

  /**
 * @returns {*} return.
 */
  function f() {
    console.log(this.name);
  }
  
  f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
  f(); John


 // Function property after bind

 /**
 * @returns {*} return.
 */
 function sayHi() {
   return  ( this.name );
 
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
//   console.log( bound.test); // undefined because sayHi is bind to another object which doent have test property



//Arrow functions and lexical ‘this’ exercise (see slides 28 and 29)
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
  this.students.forEach((student) =>
 console.log(this.title + ': ' + student)
  );
  }
 };
 group.showList();
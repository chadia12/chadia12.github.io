"use strict";
/**es-lint disable */
// Fix the slow function to be asynchronous/non-blocking

function slow(callback){ 
	
	if (Math.random() > 0.5) { 	
		return callback("Error",null) 
	} 
	return callback(null, {id:12345}) 
} 

function exec(fn){ 
	// Complete the code here to implement chaining with callback
  return{
    done: function(fnc){

    },
    fail: function(fnc)
  }
}

exec(slow).done(function(data){ console.log(data); })
	.fail(function(err){ console.log("Error: " + err); }); 
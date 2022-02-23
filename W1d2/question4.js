"use script";

    console.log( "expect (10): ", sumDigit(1234));
    console.log( "expect (3): ", sumDigit(102));
    console.log( "expect (8): ", sumDigit(8));

        console.log ( "expect (24): ", multDigits(1234));
        console.log ( "expect (0): ", multDigits(102));
        console.log ( "expect (8): ", multDigits(8));

function sumDigit(num){
    let sum = 0;
    while(num > 0){
        sum += num % 10 ;
        num = Math.floor(num /10)
        
    }
    return sum; 
}
function  multDigits(num){ 
    let multiple = 1;
    while(num > 0){
        multiple *= num % 10 ;
        num = Math.floor(num /10)
        
    }
    return multiple;
}

// function sayHi(name) {

//     console.log("Hi " , name);
  
//     return "Bye " + name;
  
//   }
  
//   const sayHiReturn = console.log(sayHi() );
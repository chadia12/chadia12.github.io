// eslint-disable-next-line strict
"use scrict";
/**eslint-disable */

let num = document.getElementById("text1");
let num2 = document.getElementById("text2");
let result = document.getElementById("result");

let btn = document.getElementById("add");
btn.onclick = function (){ 
result.value=Number (num.value) + Number (num2.value) ;


}

"use strict";
/*eslint-disable*/

let text1= document.getElementById("text-el");
let inpArea= document.getElementById("area-el");


function add(){
inpArea.innerText = text1.value;
text1.value="";
}

let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let result = document.getElementById("result-el");


function addiction(){
    result.innerText = (Number (num1.value) + Number(num2.value))

}

function sub(){
    result.innerText = (Number (num1.value) - Number(num2.value))  

}

function mult(){
    result.innerText = (Number (num1.value) * Number(num2.value))

}

let itemName= document.getElementById("item-el");
let category = document.getElementById("category-el");
 let quantity = document.getElementById("quantity-el");
 let tableElem = document.querySelector("table");
 

 function save(){
     let tr = document.createElement("tr");
     tableElem.append(tr);
 tr.innerHTML= " <td>" + itemName.value + "</td> <td>" + category.value + "</td> <td>" +quantity.value +"</td></tr>";

 }
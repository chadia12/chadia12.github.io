"use scrict";
/**eslint-disable */

let image1 = document.getElementById("img1");

let image2 = document.getElementById("img2");

let swapBtn = document.getElementById("btn");

swapBtn.onclick=function (){
    let temp = image1.src;
    image1.src = image2.src
    image2.src = temp;   
}

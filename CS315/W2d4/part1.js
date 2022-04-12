"use strict";
/*eslint-disable*/;

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

// function displayValue(nodeObj){
//     if (Array.isArray(nodeObj.children)) {
//         console.log(nodeObj.name+ ":" + nodeObj.value);
//         for (let element of nodeObj.children) {
//             displayInArray(element);
//         }

//     } else {

//         console.log(nodeObj.name +":" + nodeObj.value);

//     }
// }

// console.log(displayValue(node1));


function displayInArray(nodeObj){
   let arr =[];
    if(nodeObj.children == null){
        arr= arr.concat([nodeObj.name + ": "+ nodeObj.value]);
    }
    else{
        arr= arr.concat([nodeObj.name + ": "+ nodeObj.value]);
        for (let elem of nodeObj.children) {
            arr= arr.concat(displayInArray(elem)); 
        }
    }
    return arr;
}

console.log(displayInArray(node1));
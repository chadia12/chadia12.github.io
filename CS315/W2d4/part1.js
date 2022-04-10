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
//  if(nodeObj.children == null){
//      console.log( nodeObj.name+": "+nodeObj.value);
//  }
//  else{
//      console.log( nodeObj.name+": "+nodeObj.value);
//      for(let sub of nodeObj.children){
//          displayValue(sub);
//      }
//  }
// }

// console.log(displayValue(node1));


function displayInArray(nodeObj){
   
    if(nodeObj.children == null){
        return nodeObj.reduce(function(pre,current){
            console.log(pre, current);
            pre[current.name] = pre[current.value];
            return pre;
        });
    }
   
        let arr =[];
        for(let sub of nodeObj.children){
            arr.concat(displayInArray(sub));
        }
    return arr;
}

console.log(displayInArray(node1));
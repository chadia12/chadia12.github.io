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



let nodeObj = {

    name: "Abe",

    children: [{

        name: "Homer",

        children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]

    }]

};



// function printName(node) {
//     if (Array.isArray(node.children)) {
//         console.log(node.name);
//         for (let element of node.children) {
//             printName(element);
//         }

//     } else {

//         console.log(node.name);

//     }

// }
// console.log(printName(nodeObj));

// function findName(node, target){
//    if(node.name == target){
//        return true;
//    }
//    else if(Array.isArray(node.children)){
//        for(let elem of node.children){
//            return contains(elem, target)
//        }
//    }
//    else{
//        return false;
//    }
    
// }
// console.log(findName(nodeObj, "chadia"));


Question4
function TreeNode(name){
    this.name = name;
    this.descendents = [];

}
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");

abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);
 function ListNode(value){
     this.value = value;
 }

function generateList(root){
    if(root.descendents==null || root.descendents.length==0)
            return new ListNode(root.value);
        let linkedList = new ListNode(root.value);
        let list=linkedList;
        for(let eachChild of root.descendents){
            
            list.next = generateList(eachChild);
            list = list.next;
            
        }
        return linkedList;
   }

  console.log(JSON.stringify(generateList(abe)))

  // let linkedList = generateList(abe);
// let linkedList = {value:1,next:{value:2,next:{value:3,next:{value:4}}}}
  function traverse(list){
      if(list==null )
        return;
    
      console.log("here ",list.value);
      list = list.next;
      return traverse(list);
      
  }


//question 5
// function findListNode(list, target){
//     let listCont = null;
//     if(list.next == null){
//         if(list.name == target){
//             listCont = list;
//         }
    
//     else{
//         listCont = findListNode(list.next, target);
//   }
// }
// return listCont
// }

// console.log(findListNode(abe, "lisa"));

//Question 6




//Question 7

// function treeCollector(tree) {
//     let arr =[];
//     if(tree.children == null){
//        arr = arr.concat(tree.name);
//     }
//     else{
//         arr = arr.concat(tree.name);
//         for(let sub of tree.children){
//             arr = arr.concat(treeCollector(sub));
//         }
//     }
//     return arr;
// }
// console.log(treeCollector(nodeObj));
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
//  QUESTION 1 PART 2##############################################


function displayValue(nodeObj){
    if (Array.isArray(nodeObj.children)) {
        console.log(nodeObj.name+ ":" + nodeObj.value);
        for (let element of nodeObj.children) {
            displayInArray(element);
        }

    } else {

        console.log(nodeObj.name +":" + nodeObj.value);

    }
}

console.log(displayValue(node1));

//  QUESTION 2 PART 2 ##############################################


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

//#################################################### PART 3 ##################################################

let nodeObj = {

    name: "Abe",

    children: [{

        name: "Homer",

        children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]

    }]

};

//QUESTION 1 PART 3 ##############################################

function printName(node) {
    if (Array.isArray(node.children)) {
        console.log(node.name);
        for (let element of node.children) {
            printName(element);
        }

    } else {

        console.log(node.name);

    }

}
console.log(printName(nodeObj));



//QUESTION 2 PART 3 ##############################################


function findName(node, target){
   if(node.name == target){
       return true;
   }
   else if(Array.isArray(node.children)){
       for(let elem of node.children){
           return contains(elem, target)
       }
   }
   else{
       return false;
   }
    
}
console.log(findName(nodeObj, "chadia"));


//QUESTION 4 PART 3 ##############################################
function ListNode(value) {
    this.name = value;
    }
    
    
    
    function generateList(root) {
    
    if (root.children == null || root.children.length == 0)
    return new ListNode(root.name);
    let linkedList = new ListNode(root.name);
    let list = linkedList;
    for (let eachChild of root.children) {
    list.next = generateList(eachChild);
    list = list.next;
    }
    return linkedList;
    }
    


//QUESTION 5 PART 3##############################################

function findListNode(list, target){
    let listCont = null;
    if(list.next == null){
        if(list.name == target){
            listCont = list;
        }
    
    else{
        listCont = findListNode(list.next, target);
  }
}
return listCont
}

console.log(findListNode(abe, "lisa"));



//QUESTION 6 PART 3 ##############################################
function treeModifier(tree, modifierFunc) {
    if (tree.children == null) {
        modifierFunc(tree);
    } else {
        modifierFunc(tree);
        for (let element of tree.children) {
            treeModifier(element, modifierFunc);
        }
    }
    return tree;
}

function allCaps(node) {
    node.name = node.name.toUpperCase();
    return node;
}
function addStars(node) {
    node.name = "***" + node.name + "***";
    return node;
}
function reverseNode(node) {
    let newName = [];
    let arrayName = node.name.split("");
    for (let element of arrayName) {
        newName.unshift(element);
    }
    node.name = newName.join("");
    return node;
}

 console.log(treeModifier(Abe, allCaps))
console.log(treeModifier(Abe, addStars))
console.log(treeModifier(Abe, reverseNode))



//QUESTION 7 PART 3 ##############################################

function treeCollector(tree) {
    let arr =[];
    if(tree.children == null){
       arr = arr.concat(tree.name);
    }
    else{
        arr = arr.concat(tree.name);
        for(let sub of tree.children){
            arr = arr.concat(treeCollector(sub));
        }
    }
    return arr;
}
console.log(treeCollector(nodeObj));
"use strict";
/*eslint-disable*/

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


// Question4
// function ListNode(name){
//     this.name = name;
//     this.next = null;

// }
// const maggie = new ListNode("Maggie");
// console.log(maggie);
// const lisa = new ListNode("Lisa");
// lisa.next = maggie;
// const bart = new ListNode("Bart");
// bart.next = lisa;
// const homer = new ListNode("Homer");
// homer.next = bart;
// const abe = new ListNode("Abe");
// abe.next = homer;


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

//Question 7

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
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


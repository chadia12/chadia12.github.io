"use strict";
/*eslint-disable*/

let nodeObj = {

name: "Abe",

children: [{

name: "Homer",

 children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]

}]

}
    
    
    
    // function printName(node) {
    //     function printName(node) {

    //         if (Array.isArray(node.children)) {
            
    //         console.log(node.name);
            
    //         for (let element of node.children) {
            
    //         printName(element);
            
    //         }
            
    //         } else {
            
    //         console.log(node.name);
            
    //         }
            
            
    //         }
    // }
    
    // console.log(printName(Abe));

    function displayName(node, target){
        if(node.children != target){
           
            //for(let element of node.children){
                console.log(false);
                   // displayName(element, target);
                }
        
        else{
            for(let element of node.children){
                
                    console.log(true);
                    displayName(element,target);
                }
               
            }
            
        }


    

    console.log(displayName(nodeObj, "Lisa"));
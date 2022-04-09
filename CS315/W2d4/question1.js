"use strict";
/*eslint-disable*/;


let node1 = {
    name: "body", value: null, children: [

        {

            name: "div",

            value: null,

            children: [{ name: "label", value: "Name", children: null }, { name: "input", value: "this was typed by a user", children: null }]

        },

        {
         name: "p",
            value: "This is text in the a paragraph",

            children: null

        }

    ]



};

function nameAndValue(obj){
    if(Array.isArray(obj)){
        return obj.map(function(item){
            return item.name +": "+item.children});
            // .map(function(item2){
return item2.name + ": " +item2.children;
        //     });
        //  } );
    }
    let str ="";
    for(let elem of Object.entries(obj)){
        for(let child of elem.children){
            str = str.concat(nameAndValue(child));
        }
    }
    return str;
}

console.log(nameAndValue(node1));
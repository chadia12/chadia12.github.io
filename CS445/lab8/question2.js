 
 
Array.prototype.removeDuplicatesAsync = async function(){
    async function help(arr){
let arr2 = [...new Set(arr)];
return arr2;
    }
    let result = await help(this);
    console.log(result);
    
}



 console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);
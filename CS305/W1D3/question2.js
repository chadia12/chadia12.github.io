"use strict";

module.exports = {computeSalesCommission};


 /** 
* @param {boolean} isSalaried - salary based.
* @param {number} salesAmount - sales Amount.
* @returns {number} -commission 
*/   
function computeSalesCommission(isSalaried, salesAmount){
   
    let commision;
    const sale = 500;
    if(isSalaried){
        if(salesAmount < 300){
            return 0;
        }
        else if(salesAmount <= 500){
            return salesAmount * 0.01;
        }
        else{
             commision = (sale * 0.01);
            return ((salesAmount - sale ) * 0.02) + commision;
        }
    
    }
    else{

if(salesAmount < 300){
    return 0;
}
else if(salesAmount <= 500){
    return salesAmount * 0.02;
}

   else{ 
commision = (sale * 0.02);
return ((salesAmount - sale) * 0.03 ) + commision;
   }
}
}
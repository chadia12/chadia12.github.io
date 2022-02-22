"use script";

console.log("your commission is: ",computeSalesCommission(true,700));
function computeSalesCommission(isSalaried, salesAmount){
    let commision;
    const sale = 500;
    if(isSalaried){
        if(salesAmount < 300){
            return "no communition";
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
    return " No Commision"
}
else if(salesAmount <= 500){
    return salesAmount * 0.02;
}

   else{ 
commision = (sale * 0.02);
return ((salesAmount - sale) * 0.02 ) + commision;
   }
}
}

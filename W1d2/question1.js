"use script";

    console.log("expect 0: ", computeSalesCommission(true, 200));
    console.log("expect 0: ", computeSalesCommission(false, 200));
    console.log("expect 3: ", computeSalesCommission(true, 300));
    console.log("expect 6: ", computeSalesCommission(false, 300));
    console.log("expect 65: ", computeSalesCommission(true, 3500));
    console.log("expect 100: ", computeSalesCommission(false, 3500));
    
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

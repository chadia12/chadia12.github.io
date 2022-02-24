/* eslint-disable */ 

const assert = require("assert");

//console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
function calcDistance(x1, y1, x2, y2){
    let distance = Number( [ Math.sqrt(Math.pow ( x2 - x1,2 )  + Math.pow( y2 - y1,2 ) ) ] ) ;
    distance =  distance.toFixed(2);
    return distance;

}


describe(" alcDistance", function (){
    it("expert 7.07 ", function (){
assert.equal(calcDistance(0, 0, 5, 5), 7.07);
    });
});
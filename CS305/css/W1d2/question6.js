/* eslint-disable */ 

console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
function calcDistance(x1, y1, x2, y2){
    let distance = Number( [ Math.sqrt(Math.pow ( x2 - x1,2 )  + Math.pow( y2 - y1,2 ) ) ] ) ;
    distance =  distance.toFixed(2);
    return distance;

}


console.log("start");
async function foo(){
    return "done";

}

async function bar(){
    console.log("inside bar start");
    let res= await foo();
    console.log(res);
    console.log("inside bar end");
}

bar();
console.log("end");
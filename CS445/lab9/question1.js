"use strict";
/*eslint-disable */

window.onload = function(){

const display = document.getElementById("content");
fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(data =>{
    data.results.forEach(elem => {
        let res =`<div class="mx-auto" style="width: 400px;">
        <div class="card mb-3 " style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${elem.picture.large}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-6">
                <div class="card-body">
        
                <label class="card-text">${elem.name.first} </label>
                <label class="card-text">phone: ${elem.phone} </label>
                <label class="card-text">${elem.email} </label>
                </div>
              </div>
            </div>
          </div> `
          display.innerHTML +=res;
        
    });
})
 document.getElementById("btnrefresh").onclick = function(){
     display.innerHTML ="";
     fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(data =>{
    data.results.forEach(elem => {
        let res =`<div class="mx-auto" style="width: 400px;">
        <div class="card mb-3 " style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${elem.picture.large}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-6">
                <div class="card-body">
        
                  <label class="card-text">${elem.name.first} </label>
                  <label class="card-text">phone: ${elem.phone} </label>
                  <label class="card-text">${elem.email} </label>
                </div>
              </div>
            </div>
          </div> `
          display.innerHTML +=res;
        
    });
})
 }


}
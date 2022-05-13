"use strict";
/*eslint-disable */

window.onload = function () {



    document.getElementById("login").onclick = function () {

        let user = document.getElementById("user").value;
        let psd = document.getElementById("psd").value;

        let userObj = {
            username: user,
            password: psd,
        };

        console.log(userObj)
        let jsonString = JSON.stringify(userObj);
        
            fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                body: jsonString,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
    
            })
                .then(response => response.json())
                .then(dataobj => {
                    if(dataobj.status === "error"){
                        let errorDisplay = document.getElementById("loginError");
                        errorDisplay.innerHTML =`<label>${dataobj.message}</label>`;
                           
                    }else{
                        sessionStorage.setItem('keyaccess', dataobj.accessToken);
                        console.log(dataobj.accessToken);
                        let displayList = document.getElementById("musicTable");
                        let displayHead = document.getElementById("welcom");
                        let datasess = sessionStorage.getItem('keyaccess');
                        console.log(datasess);
                        fetch('http://localhost:3000/api/playlist',{
                            method: 'GET',
                          headers:{
                           'Authorization': `Bearer ${datasess}`
                          }  
                        })
                        
                        .then(response => response.json())
                        .then(data =>{
                            console.log(data)
                        })

                    }
                    
    
    
                });
        
       


    }


}
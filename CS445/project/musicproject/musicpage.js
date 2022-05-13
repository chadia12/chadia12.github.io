"use strict";
/*eslint-disable */

window.onload = function () {
    if (sessionStorage.getItem('keyaccess')) {
        afterLogin();

    } else {
        notLogin();
    }

    document.getElementById("login").onclick = function () {

        const user = document.getElementById("user").value;
        const psd = document.getElementById("psd").value;

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
            }

        }).then(response => response.json())
            .then(data => loggedInFeatures(data));

    }
    document.getElementById("logout").onclick =function(){
        sessionStorage.removeItem('keyaccess');
        notLogin();

    }


}


function loggedInFeatures(data) {
    if (data.status) {
        let errorDisplay = document.getElementById("loginError");
        errorDisplay.innerHTML = `<label>${dataobj.message}</label>`;
    } else {
        document.getElementById("user").value='';
        document.getElementById("psd").value='';
        sessionStorage.setItem('keyaccess', data.accessToken);
        afterLogin();

    }

}

function fetchMusic() {
    fetch('http://localhost:3000/api/playlist', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('keyaccess')}`
        }
    })

        .then(response => response.json())
        .then(songs =>
            console.log(songs)
        )

}


function fetchPlaylist() {

}

function afterLogin() {
    document.getElementById("searchWrap").style.display = 'block';
    document.getElementById("loginWrap").style.display = 'none';
    document.getElementById('welcome').style.display ='none'
    fetchMusic();
    fetchPlaylist();
     document.getElementById('musicTable').innerHTML = `<h4>Songs  List</h4>
     <table class="table table-dark table-striped ">
         <thead>
             <tr>
                 <td>Id</td>
                 <td>Title</td>
                 <td>Release Date</td>
                 <td>Action</td>
             </tr>
         </thead>
         <tbody>
             <tr>
                 <td>1</td>
                 <td>Just me</td>
                 <td> 192</td>
                 <td><button type="button" class="btn btn-dark text-center" id="addbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
                     <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                   </svg></button></td>
             </tr>
             <tr>
                 <td>2</td>
                 <td>yolo</td>
                 <td> 192</td>
                 <td><button type="button" class="btn btn-dark text-center" id="addbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
                     <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                   </svg></button></td>
             </tr>
         </tbody>
       </table>

<br>
<h4>Play List</h4>
<table class="table table-dark table-striped ">
<thead>
 <tr>
     <td>Id</td>
     <td>Title</td>
     <td>Release Date</td>
     <td>Action</td>
 </tr>
</thead>
<tbody>
 <tr>
     <td>1</td>
     <td>Just me</td>
     <td> 192</td>
     <td><button type="button" class="btn btn-dark text-center" id="addbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
         <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
       </svg></button>
         <button type="button" class="btn btn-dark text-center" id="addbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
             <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
           </svg></button>
     </td>
 </tr>
 <tr>
     <td>2</td>
     <td>yolo</td>
     <td> 192</td>
     <td><button type="button" class="btn btn-dark text-center" id="addbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
         <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
       </svg></button>
         <button type="button" class="btn btn-dark text-center" id="addbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
             <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
           </svg></button></td>
 </tr>
</tbody>
</table>`;
}







function notLogin() {
    document.getElementById("searchWrap").style.display = 'none';
    document.getElementById("loginWrap").style.display = 'block';
    // document.getElementById("welcom").innerHTML = `Welcome to Music Website`;
}
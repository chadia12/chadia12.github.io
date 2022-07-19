"use strict";
/*eslint-disable */
////*******************************window onload with login and logout******************************* */
window.onload = function () {
    if (sessionStorage.getItem('keyaccess')) {
        afterLogin();

    } else {
        notLogin();
    }

//*******************************LOGIN******************************* */
    document.getElementById("login").onclick = function () {

        const user = document.getElementById("user").value;
        const psd = document.getElementById("psd").value;

        let userObj = {
            username: user,
            password: psd,
        };
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
//*******************************LOGOUT******************************* */
    document.getElementById("logout").onclick = function () {
        sessionStorage.removeItem('keyaccess');
        notLogin();

    }
    document.getElementById("searchBtn").onclick = searchMusic;

    
}


////*******************************LOGIN INVALID USER & PASSWORD******************************* */
function loggedInFeatures(data) {
    if (data.status) {
        let errorDisplay = document.getElementById("loginError");
        errorDisplay.innerHTML = `<label>${data.message}</label>`;
    } else {
        document.getElementById("user").value = '';
        document.getElementById("psd").value = '';
        sessionStorage.setItem('keyaccess', data.accessToken);
        afterLogin();

    }

}

//*******************************SONG LIST******************************* */

function fetchMusic() {
    const allMusic = document.getElementById('musicTable');
    allMusic.innerHTML = "";
    fetch('http://localhost:3000/api/music', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('keyaccess')}`
        }
    })

        .then(response => response.json())
        .then(songs => {
            let count = 1;
            songs.forEach(element => {
                let res = ` <tr>
                    <td>${count}</td>
                    <td>${element.title}</td>
                    <td>${element.releaseDate}</td>
                    <td><button type="button" class="btn btn-dark text-center addSong" id="addbtn" data-add="${element.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                      </svg></button></td>
                </tr>`
                ++count;
                allMusic.innerHTML += res;
                addSongToPlayList()
            });



        }

        )

}
//*******************************END SONG LIST******************************* */

//*******************************PLAYLIST******************************* */

function fetchPlaylist() {
    const playList = document.getElementById("playList");
    playList.innerHTML = "";

    fetch('http://localhost:3000/api/playlist', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('keyaccess')}`
        }

    })
        .then(response => response.json())
        .then(playListSongs => {
            console.log(playListSongs);
            if (playListSongs.length === 0) {
                document.getElementById("playwrap").style.display = 'none';
                document.getElementById("empytMessage").style.display = 'block';
            }
            else {
                document.getElementById("playwrap").style.display = 'block';
                document.getElementById("empytMessage").style.display = 'none';
                playListSongs.forEach(element => {

                    let res = `<tr>
            <td>${element.orderId}</td>
            <td>${element.title}</td>
            
            <td><button type="button" class="btn btn-dark text-center" data-remove="${element.songId}" onclick="deletBtn(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
              </svg></button>
                <button type="button" class="clickplaybtn btn btn-dark text-center" data-id="${element.orderId}" data-playSong="${element.urlPath}" onclick="playBtn(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                    <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                  </svg></button>
            </td>
        </tr>`;
                    playList.innerHTML += res;
                    
                    
                });
               
            }

        })

}
//*******************************END PLAYLIST******************************* */


//*******************************AFTER LOGIN******************************* */
function afterLogin() {
    document.getElementById("searchWrap").style.display = 'block';
    document.getElementById("loginWrap").style.display = 'none';
    document.getElementById('welcome').style.display = 'none';
    document.getElementById("musicWrap").style.display = 'block';
    document.getElementById("playwrap").style.display = 'block';
    document.getElementById("imageBack").style.display = 'none';
    
    fetchMusic();
    fetchPlaylist();
}
//*******************************HOME PAGE****************************** */
function notLogin() {
    document.getElementById("searchWrap").style.display = 'none';
    document.getElementById("loginWrap").style.display = 'block';
    document.getElementById('welcome').style.display = 'block';
    document.getElementById("musicWrap").style.display = 'none';
    document.getElementById("playwrap").style.display = 'none';
    document.getElementById("imageBack").style.display = 'block';
    document.getElementById("audioPlay").style.display ="none"
    

}


//*******************************SEARCH SONG******************************* */
function searchMusic() {
    let searchSong = document.getElementById("serachSong");
   fetch(`http://localhost:3000/api/music?search=${searchSong.value}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('keyaccess')}`
        }
    }).then(response => response.json())
        .then(songs => {
            let count = 1;
            const allMusic = document.getElementById('musicTable');
            allMusic.innerHTML = "";
            songs.forEach(element => {
                let res = ` <tr>
            <td>${count}</td>
            <td>${element.title}</td>
            <td>${element.releaseDate}</td>
            <td><button type="button" class="btn btn-dark text-center addSong" data-add="${element.id}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
              </svg></button></td>
        </tr>`
                ++count;
                allMusic.innerHTML += res;
                addSongToPlayList()

            });
            searchSong.value = "";
        })
}
//*******************************END SEARCH******************************* */

//*******************************ADD SONG TO PLAY LIST******************************* */
function addSongToPlayList() {
    let songAdd = document.querySelectorAll(".addSong");
    for (let songElement of songAdd) {
        songElement.onclick = function () {
            let id = this.getAttribute("data-add");
            const playList = document.getElementById("playList");
            playList.innerHTML = "";

            fetch('http://localhost:3000/api/playlist/add', {
                method: 'POST',
                body: JSON.stringify({ songId: id }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${sessionStorage.getItem('keyaccess')}`
                }
            }).then(response => response.json())
                .then(songs => {
                    songs.forEach(element => {
                        let res = `<tr>
                        <td>${element.orderId}</td>
                        <td>${element.title}</td>
                        
                        <td><button type="button" class="btn btn-dark text-center removeBtn" data-remove="${element.songId}" onclick="deletBtn(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                          </svg></button>
                            <button type="button" class="clickplaybtn btn btn-dark text-center" data-playSong="${element.urlPath}" onclick="playBtn(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                              </svg></button>
                        </td>
                    </tr>`;
                        playList.innerHTML += res;
                       
                    })

                })

        }

    }
   
}
//******************************* END ADD SONG TO PLAY LIST******************************* */

//*******************************DELETE BUTTON******************************* */

function deletBtn(btn){


            let id = btn.getAttribute("data-remove");
            const playList = document.getElementById("playList");
            playList.innerHTML = "";

            fetch('http://localhost:3000/api/playlist/remove', {
                method: 'POST',
                body: JSON.stringify({ songId: id }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${sessionStorage.getItem('keyaccess')}`
                }
            }).then(response => response.json())
                .then(songs => {
                    
                   console.log(songs);
                    songs.forEach(element => {
                        let res = `<tr>
                        <td>${element.orderId}</td>
                        <td>${element.title}</td>
                        
                        <td><button type="button" class="btn btn-dark text-center " data-remove="${element.songId}" onclick="deletBtn(this)" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                          </svg></button>
                            <button type="button" class=" clickplaybtn btn btn-dark text-center" data-playSong="${element.urlPath}" onclick="playBtn(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                                <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                              </svg></button>
                        </td>
                    </tr>`;
                        playList.innerHTML += res;
                    })

                })

        

    

}

//*******************************END DELETE BUTTON******************************* */

//******************************* PLAY SONG BUTTON******************************* */

function playBtn(obj){
    let id= obj.getAttribute("data-id");
        let titleSong = obj.getAttribute("data-playSong");
                let playAudio = document.getElementById("audioPlay");
                // playAudio.innerHTML="";
                playAudio.style.display ="block"
                playAudio.innerHTML =` 
                <div class="container">
                <div class="row">
                  <div class="col">
                    <button id="prev"  class="action-btn" data-back="${id}" onclick="previousSong(this)">
                        <i class="fa-solid fa-backward-fast" ></i></button>
                  </div>
                  <div class="col-6">
                    <audio controls autoplay>
                        <source src="http://localhost:3000/${titleSong}" type="audio/mpeg">
                        </audio>
                  </div>
                  <div class="col">
                    <button id="next"  class="action-btn" data-back="${id}" onclick="nextSong(this)">
                        <i class="fa-solid fa-forward-fast" ></i></button>
                        <button onclick="repeatSong()"><i class="fa-solid fa-repeat"></i></button>
                  </div>

              </div>`;
                
                
}

//******************************* END PLAY SONG BUTTON******************************* */

//******************************* PREVIOUS SONG******************************* */
function previousSong(obj){
    let id= obj.getAttribute("data-back");

 fetch('http://localhost:3000/api/playlist', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('keyaccess')}`
        }

    }).then(response => response.json())
    .then(songs =>{
        let filtSong = songs.filter(eachSong => eachSong.orderId == Number(id)-1);
        let playAudio = document.getElementById("audioPlay");
        playAudio.style.display ="block"
        playAudio.innerHTML =` 
        <div class="container">
                <div class="row">
                  <div class="col">
                    <button id="prev"  class="action-btn" data-back="${filtSong[0].orderId}" onclick="previousSong(this)">
                        <i class="fa-solid fa-backward-fast" ></i></button>
                  </div>
                  <div class="col-6">
                    <audio controls autoplay>
                        <source src="http://localhost:3000/${filtSong[0].urlPath}" type="audio/mpeg">
                        </audio>
                  </div>
                  <div class="col">
                    <button id="next"  class="action-btn" data-back="${filtSong[0].orderId}" onclick="nextSong(this)">
                        <i class="fa-solid fa-forward-fast" ></i></button>
                        <button onclick="repeatSong()"><i class="fa-solid fa-repeat"></i></button>
                  </div>

              </div>`;
    })
}

//******************************* END PREVIOUS SONG******************************* */

//******************************* NEXT SONG******************************* */

function nextSong(obj){
    let id= obj.getAttribute("data-back");
    fetch('http://localhost:3000/api/playlist', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('keyaccess')}`
        }

    }).then(response => response.json())
    .then(songs =>{
        let filtSong = songs.filter(eachSong => eachSong.orderId == Number(id)+1);
        let playAudio = document.getElementById("audioPlay");
        playAudio.style.display ="block"
        playAudio.innerHTML =`
        <div class="container">
        <div class="row">
          <div class="col">
            <button id="prev"  class="action-btn" data-back="${filtSong[0].orderId}" onclick="previousSong(this)">
                <i class="fa-solid fa-backward-fast" ></i></button>
          </div>
          <div class="col-6">
            <audio controls autoplay>
                <source src="http://localhost:3000/${filtSong[0].urlPath}" type="audio/mpeg">
                </audio>
          </div>
          <div class="col">
            <button id="next"  class="action-btn" data-back="${filtSong[0].orderId}" onclick="nextSong(this)">
                <i class="fa-solid fa-forward-fast" ></i></button>
                <button onclick="repeatSong()"><i class="fa-solid fa-repeat"></i></button>
          </div>

      </div>`;
    })

}
//******************************* END NEXT SONG******************************* */

//*******************************REPEAT SONG****************************** */
function repeatSong(){
    playAudio = document.querySelector("audio").loop = true;  
}
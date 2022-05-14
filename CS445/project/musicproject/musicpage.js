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

    document.getElementById("logout").onclick = function () {
        sessionStorage.removeItem('keyaccess');
        notLogin();

    }
    document.getElementById("searchBtn").onclick = searchMusic;


}



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
            
            <td><button type="button" class="btn btn-dark text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
              </svg></button>
                <button type="button" class="btn btn-dark text-center" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                    <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                  </svg></button>
            </td>
        </tr>`;
                    playList.innerHTML += res;
                });

            }

        })

}


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

function notLogin() {
    document.getElementById("searchWrap").style.display = 'none';
    document.getElementById("loginWrap").style.display = 'block';
    document.getElementById('welcome').style.display = 'block';
    document.getElementById("musicWrap").style.display = 'none';
    document.getElementById("playwrap").style.display = 'none';
    document.getElementById("imageBack").style.display = 'block';

}

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
            <td><button type="button" class="btn btn-dark text-center" id="addbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus-fill" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
              </svg></button></td>
        </tr>`
                ++count;
                allMusic.innerHTML += res;
            });
            searchSong.value = "";
        })
}

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
                        
                        <td><button type="button" class="btn btn-dark text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                          </svg></button>
                            <button type="button" class="btn btn-dark text-center" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
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
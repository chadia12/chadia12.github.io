window.onload = function(){ 
     document.getElementById('addtweetBtn').onclick = addTweet;
      if(sessionStorage.getItem('accessToken')){
       
           fetchTwites();
      }else{
          window.location='index.html';
      }
}



async function addTweet(event){
    event.preventDefault();
    const userid = sessionStorage.getItem('userID');
    const username = sessionStorage.getItem('username');
    const body = document.getElementById('tweet-body');
    
    
const timestamps = new Date(Date.now())
console.log(timestamps);
    const response = await fetch('http://localhost:8888/tweets',{
        method:'POST',
        body: JSON.stringify({
            tweet: body.value,
            user: userid,
            createdAt: timestamps
        }),
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
        
    });
    
    const result = await response.json();
    if(result.error){
        console.log('ooops')
    }else{
        document.getElementById('tweet-body').value = " ";
        location.reload()
    }
}
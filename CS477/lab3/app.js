"use strict";
/*eslint-disable */;
// Create a http server which listens to 3000 port.
// The home page “/” which displays an html page with a blog post form: there's a title input, a blog body textarea and a submit button in the form
// User enter information, then click “Submit” button
// On the server side, grab user's inputs and save into a file.
// After saving successfully, display "Save Successfully" page to user with a link goes back to home page.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    if(req.url === '/' ){
        const mypage= fs.readFileSync('./index.html');
        res.end(mypage);
    }
    else if(req.url === '/homepage' && req.method === 'POST'){
        const arr = [];
        req.on('data', chunk =>{
            arr.push(chunk);
        });
        req.on('end', () => {
            const wrd = Buffer.concat(arr).toString();
            const str =wrd.split('&');
            fs.writeFile('displaypage.txt', `${str[0]} ${str[1]}`, (err) =>{
                if(!err){
                    res.end(`<html>
                    <body> 
                    <p>Save successfully </p>
                    <a href="/"><button> Home</button> </a>
                    </body></html>`);
                } 
                else{
                    res.end('Oops try again');
                }
            })
        });

    }
    
   

}).listen(3000, () => console.log('start my server'));
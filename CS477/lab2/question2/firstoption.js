"use strict";
/*eslint-disable*/;
const http = require('http');
const fs = require('fs');
const path = require('path');

//################ first option using synchronous #############
// http.createServer((req, res) =>{
//    res.writeHead(200, {'Content-type':'image/jpg'}); 
//    let img = fs.readFileSync(path.join(__dirname, 'tout.jpg'));
// res.end(img);
// }).listen(3000,() =>console.log('listening on  port 3000'));


//################ second  option using Asynchronous #############

// http.createServer((req, res) =>{
//  res.writeHead(200,{'Content-type':'image/jpg'});
//  fs.readFile(path.join(__dirname, 'tout.jpg'),(err, data)=>{
//     if(err){
//         throw new error(err)
//     }
//     res.end(data); 
//  })

// }).listen(3000,() => console.log('listening on port 3000'));

 
//################ last option which is the better one using stream #############
  http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type':'image/jpg'});
    let img = fs.createReadStream(path.join(__dirname, 'tout.jpg'));
       img.pipe(res);

  }).listen(3000, () => console.log('listen on port 3000'));
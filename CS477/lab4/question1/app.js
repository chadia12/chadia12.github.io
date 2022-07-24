"use strict";
/*eslint-disable */
/**
 Create a npm project and install Express.js (Nodemon if you want)

Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.

For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers.
Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.

Customize your 404 page

Provide your own error handling
 */
const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.Port || 3000);
app.use(express.urlencoded({ extended: true }));


app.use('/loginpage', (req, res, next) => {
    if (req.body.uname === 'chadia' && req.body.mail === 'cha@12.com' && req.body.psw === '123') {
        res.redirect('/product');
    }
    else {

        res.redirect('/user');
    }

});


app.use('/product', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'product.html'));
})

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'user.html'));

});

app.listen(app.get('port'), () => console.log(`${app.get('port')}`));


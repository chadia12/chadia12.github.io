"use strict";
/*eslint-disable*/
const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/books',bookRouter);

app.use((req, res, next) =>{
    res.status(404).send('server is not connected')
});

app.use((err, req, res, next) =>{
    res.status(500).send(err);
})

app.listen(3001, ()=>console.log('server 3001'));

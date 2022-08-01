
const express = require('express');
const bookRouter = require('./router/bookRouter');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/books', bookRouter);

app.use((req, res, next)=>{
    res.status(404).send({error:'API NOT SUPPORTED'});
})

app.use((err, req, res, next)=>{
    res.status(500).send(err.message);
});
app.use((req, res, next) =>{
    res.status(500).send({error: err.message});
});

mongoose.connect('mongodb://127.0.0.1:27017/bookStore')
    .then(() =>{
        app.listen(3000);
    });
  

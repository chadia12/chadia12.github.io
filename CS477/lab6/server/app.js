
const express = require('express');
const bookRouter = require('./router/bookRouter');
const {mongoConnect} = require('./utils/database2');
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
})

mongoConnect(() =>{
    app.listen(3000);
});

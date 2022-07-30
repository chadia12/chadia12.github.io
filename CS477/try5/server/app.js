"use strict";
/*eslint-disable*/
const express = require('express');

const productRouter = require('./routes/productRouter');

const app = express();

app.use(express.json()); //req.body = {}

app.use('/products', productRouter);

app.listen(3000);
"use strict";
/*eslint-disable */
const Book = require('../models/book');

exports.getAll=async (req, res, next) =>{
res.json(Book.getAll());
}


exports.getById =(req, res,next) =>{
    res.json(Book.getById(req.params.id));
}


exports.save = (req, res, next) =>{
    let addBook = new Book(null, req.body.title, req.body.isbn, req.body.publichedDate, req.body.author).save();
res.json(addBook);
}

exports.update =(req, res) =>{
   let updateBook = new Book(req.params.id, req.body.title, req.body.isbn, req.body.publichedDate, req.body.author).update();
   
res.json(updateBook);
}

exports.deleteById =(req,res) =>{
    res.json(Book.deleteById(req.params.id));
}
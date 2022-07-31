
const Book = require('../model/books');


exports.getAll = (req, res, next)=>{
    res.json(Book.getAll());
};
exports.getById = (req, res, next)=>{
    res.json(Book.getById(req.params.id));
};
exports.save = (req, res, next)=>{
    let addBook = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author ).save();
    res.json(addBook);
};
exports.update = (req, res, next)=>{
    let updateBook = new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author).update();
    res.json(updateBook);
};
exports.deleteById = (req, res, next)=>{
    res.json(Book.deleteById(req.params.id));
};
 
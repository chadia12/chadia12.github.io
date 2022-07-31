
const Book = require('../model/books');

exports.getAll = (req, res, next)=>{
    res.json(await Book.getAll());
}

exports.getById = (req, res, next)=>{
    res.json(await Book.getById(req.params.id));
}

exports.save = (req, res, next)=>{
    let addBook = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author );
    const result = await addBook.save();
    addBook._id = result.insertedId;
    res.json(addBook);
}

exports.update = (req, res, next)=>{
    let updateBook = new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    await updateBook.update();
    res.json(updateBook);
}

exports.deleteById = (req, res, next)=>{
    await Book.deleteById(req.params.id)
    res.json({_id: req.params.id});
}
 

const Book = require('../model/books');


exports.getAll = (req, res, next)=>{
  Book.getAll()
  .then(allbk =>{
    res.json(allbk);
  })  
}

exports.getById = (req, res, next)=>{
   Book.getById(req.params.id)
   .then(bk =>{
    res.json(bk);
   });
}

exports.save = (req, res, next)=>{
    let addBook = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author );
    addBook.save()
    .then(result =>{
        console.log(result);
        addBook._id = result.insertedId;
        res.json(addBook);
    });
    
}

exports.update = (req, res, next)=>{
    let updateBook = new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    updateBook.update()
    .then(result =>{
        res.json(updateBook);
    })
    
}

exports.deleteById = (req, res, next)=>{
    Book.deleteById(req.params.id)
    .then(result =>{
        res.json(Book.deleteById(req.params.id))
    })
   ;
}
 
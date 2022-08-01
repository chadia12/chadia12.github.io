const Book = require('../model/books');
const {ObjectId} = require('mongodb');

exports.getAll = async (req, res, next)=>{
    res.json(await Book.find() );
};
exports.getById = async (req, res, next)=>{
   res.json(await Book.findById(req.params.id));
};
exports.save = async (req, res, next)=>{
        const result = await new Book(req.body).save(); 
        res.json(result);

};
exports.update = async (req, res, next)=>{
    const result = await Book.updateOne({_id: new ObjectId(req.params.id)} , req.body);
    res.json(result);
};
exports.deleteById = async(req, res, next)=>{
    await Book.findByIdAndDelete(req.params.id);
    res.json({_id: req.params.id});
};
 
 
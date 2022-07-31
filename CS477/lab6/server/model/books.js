
const { getDB } = require("../utils/database1");
const {objectId} = require('mongodb');


module.exports = class Book{

    constructor(id, title, isbn, publishedDate, author){
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll(){
        return getDB().collection('books').find().toArray();
    }

    static getById(id){
       
        return getDB().collection('books').findOne({_id: new objectId(id)});
    } 

    save(){
        return getDB().collection('books').insertOne(this);
    }

    update(){
        const self = Object.assign({}, this);
        delete self._id;
        return getDB().collection('books')
        .updateOne({_id: new objectId(this._id)}, {$set:self});
    }

    static deleteById(id){
       return getDB().collection('books').deleteOne({_id: new objectId(id)});
    
}
}
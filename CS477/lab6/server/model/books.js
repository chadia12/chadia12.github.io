const books = [
    {id:1, title:"java", isbn:"0-3403-8673-8", publishedDate:"03-09-2021", author:"Eimhir MacAlastair"},
    {id:2, title:"javascript", isbn:"0-6969-8578-0", publishedDate:"01-29-2015", author:"Kenneth Boyd"},
    {id:3, title:"Algorithm", isbn:"0-8489-9973-8", publishedDate:"12-06-2010", author:"Gilleasbaig Lusk"},
    {id:4, title:"SQL", isbn:"0-7581-1908-9", publishedDate:"07-13-2021", author:"Raghnaid Begbie"}
]

let counter = 5;
const {getDB} =require('../utils/database2');
const {ObjectId} = require('mongodb');

module.exports = class Book{

    constructor(id, title, isbn, publishedDate, author){
        this._id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll(){
        return getDB().collection('books').find().toArray();
    }

    static getById(id){
       return getDB().collection('books').findOne({_id: new ObjectId(id)});
    } 

    save(){
        return getDB().collection('books').insertOne(this);
    }

    update(){
        const self = Object.assign({}, this);
        delete self._id;
     return getDB().collection('books').updateOne({_id: new ObjectId(this._id)},{$set:self});  
    }


    static deleteById(id){
    return getDB().collection('books').deleteOne({_id: new ObjectId(id)});
    
}
}
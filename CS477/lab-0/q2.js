"use strict";
/* eslint-disable */
let db = [
    {id:1, fname: 'John', lname: 'Smith'},
    {id:2, fname: 'Lucy', lname: 'Jark'},
    {id:3, fname: 'Edward', lname: 'Capton'}
];

class Student {
    constructor(id, firstname, lastname){
        this.id = id;
        this.fname = firstname;
        this.lname = lastname;
    }

    save(){
        let newobj={}
        newobj.id = this.id;
        newobj.fname = this.fname;
        newobj.lname = this.lname; 
       db.push(newobj);
  
    }

    edit(){
        let newobj={}
        newobj.id = this.id;
        newobj.fname = this.fname;
        newobj.lname = this.lname;  
      
        Object.assign(db.find((elem)=>elem.id === newobj.id), newobj);

    }

    static getById(id){
let newId =db.filter(function(elem){
return elem.id == id;
});
console.log(newId);
    }

    static getAll(){

        console.log(db);
    }


   static  deleteById(id){
let index = db.findIndex((elem) => elem.id ===id);
if(index > -1){
    db.splice(index,1);
}
else{
    throw new Error("INDEX NOT FOUND");
}
    }

}

new Student(4, 'Tina', 'Xing').save(); //save to db
new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4
Student.deleteById(4); //remove studentId=4 from db
Student.getAll(); //return db;
Student.getById(1); //return {id:1, fname: 'John', lname: 'Smith'}

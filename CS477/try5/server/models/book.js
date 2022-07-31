

let books = [
    { id: 1, title: "C++", isbn: "154", publichedDate: "4/8/175", author: "keza" },
    { id: 2, title: "paython", isbn: "458", publichedDate: "5/7/2957", author: "Bidwell" },
    { id: 3, title: "SQL", isbn: "758", publichedDate: "9/14/2000", author: "keza" }
];

let count = 4;
module.exports = class Book {
    constructor(id, title, isbn, publichedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publichedDate = publichedDate;
        this.author = author
    }
    static getAll() {
        return books;
    }

    static getById(id) {
        let index = books.findIndex(bk => bk.id == id);
        if (index < -1) {
            throw new Error(`NO BOOK FOUND WITH ID: ${id}`);
        }
        else {
            return books[index];
        }
    }
    save() {
        this.id = count++;
        books.push(this);
        return this;
    }
    update() {
        const index = books.findIndex(bk => bk.id == this.id);
        if (index < -1) {
            throw new Error(`NO BOOK FOUND WITH ID: ${id}`);
        }
        else {
            books[index] = this;
            return this;
        }
    }
    static deleteById(id) {
        const index = books.findIndex(bk => bk.id == id);
        if (index < -1) {
            throw new Error(`NO BOOK FOUND WITH ID: ${id}`);
        }
        else {
            let temp = books[index];
            books.splice(index, 1);
            return temp;
        }
    }
}
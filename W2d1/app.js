"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles,addBook,findAuthors, findIDs }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
    return titles;
}


/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for (let val of library) {
        titles.push(val.title);
    }
    //FIX THIS!!
    // implement this and other functions
    return titles;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showAuthors() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const authors = findAuthors();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    authors.sort();
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}


/**
 * 
 * @returns {object} array holding all author as elements
 */
function findAuthors() {
    let authors = [];
    for (let val of library) {
        authors.push(val.author);
    }

    return authors;

}


//************************************************** */

/**
 * 
 * @returns {object} array holding all library ids as elements
 */
function findIDs() {
    let libraryIDs = [];
    for (let val of library) {
        libraryIDs.push(val.libraryID);
    }

    return libraryIDs;

}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showIds() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const ids = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    ids.sort();
    const idsString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idsString;
}




// Event handler for Add book button.  Creates and adds book to the library

/**
 * 
 * @param {string} title -title of book.
 * @param {string} author -Author of book.
 * @param {number} libraryID -Id of book.
 * @returns {object} - object of book.
 */
function addBook(title, author, libraryID) {
    let newbook = {};
    title = document.getElementById("title").value; //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
    author = document.getElementById("author").value;
    libraryID = document.getElementById("libraryID").value;
    newbook = { title, author, libraryID };
    library.push(newbook);
    return newbook;

}

/**
 * @returns {undefined}
 */
function scramble() {
    let sorter = showTitles();
    let str = sorter.toString();
    let strtoarr = str.split(/[, " "]/);
    strtoarr.sort((a, b) => (a.length > b.length) ? 1 : -1);
    const arrString = strtoarr.join("\n");
    let textArea = document.getElementById("displayArea");

    textArea.innerHTML = arrString;
}

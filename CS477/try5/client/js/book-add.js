window.onload = function () {
    document.getElementById('add-button').onclick = addBook;
}

async function addBook(event) {
    event.preventDefault();
    const inputTitle = document.getElementById('title');
    const inputIsbn = document.getElementById('isbn');
    const inputPublishe = document.getElementById('publichedDate');
    const inputAuthor = document.getElementById('author');
    const response = await fetch('http://localhost:3001/books', {
        method: 'POST',
        body: JSON.stringify({
            title: inputTitle.value,
            isbn: inputIsbn.value,
            publichedDate: inputPublishe.value,
            author: inputAuthor.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    document.getElementById('book-add-form').reset();
    console.log(data);
    window.location ='index.html';
}
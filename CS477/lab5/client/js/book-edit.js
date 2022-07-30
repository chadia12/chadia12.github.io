window.onload = function () {
    let url = new URL(location.href);
    const bookId = url.searchParams.get('id');
    fetchBookById(bookId);
    document.getElementById('add-button').onclick = function (event) {
        event.preventDefault();
        editBookById(bookId)
    }
}

function fetchBookById(id) {
    console.log(id);
    fetch('http://localhost:3001/books/'+ id)
        .then(response => response.json())
        .then(bk => {
            
            document.getElementById('title').value = bk.title;
            document.getElementById('isbn').value = bk.isbn;
            document.getElementById('publichedDate').value = bk.publichedDate;
            document.getElementById('author').value = bk.author;
        });
}

async function editBookById(id) {
    const response = await fetch('http://localhost:3001/books/'+id, {
        method: 'PUT',
        body: JSON.stringify({
            title: document.getElementById('title').value,
            isbn: document.getElementById('isbn').value,
            publishedDate: document.getElementById('publichedDate').value,
            author: document.getElementById('author').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
   
    if (response.ok) {
        window.location = 'index.html';
    }
}
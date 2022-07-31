window.onload = function(){
    fetchBooks();
}
function fetchBooks(){
    fetch('http://localhost:3001/books')
    .then(response => response.json())
    .then(books =>displayBooks(books))
    .catch(err =>{
        console.log(err);
    });
}
function displayBooks(books){
    const tbody = document.getElementById('books-table');
    console.log(books);
    let html ='';
    books.forEach(bk => {
        html +=`
        <tr id="tr${bk.id}">
        <th>${bk.id}</th>
        <td>${bk.title}</td>
        <td>${bk.isbn}</td>
        <td>${bk.publichedDate}</td>
        <td>${bk.author}</td>
        <td>
            <button type="button" class="btn btn-primary" onClick="deleteBook(${bk.id});">DELETE</button> 
            <button type="button" class="btn btn-primary" onClick="editBook(${bk.id});">EDIT</button>
        </td>
    </tr>
        `
    });

    tbody.innerHTML = html;
}
 
function deleteBook(id){
    fetch("http://localhost:3001/books/"+id,{
        method:'DELETE'
    }).then(response =>{
        document.getElementById(`tr${id}`).remove();
    }).catch(err => console.log(err));
}

 function editBook(id){
    window.location ='edit-book.html?id='+id;
 }

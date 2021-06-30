const bookForm = document.getElementById("bookForm");
const libFlex = document.getElementById("libFlex");

let myLibrary = [
{
    "title": "Do Androids Dream of Electric Sheep?",
    "author": "Philip K. Dick",
    "pages": 187,
    "read": true
},
{
    "title": "The Hobbit",
    "author": "J. R. R. Tolkien",
    "pages": 310,
    "read": false
},
{
    "title": "Practical Object-Oriented Design in Ruby",
    "author": "Sandi Metz",
    "pages": 272,
    "read": false
},
{
    "title": "The Final Empire",
    "author": "Brandon Sanderson",
    "pages": 672,
    "read": false
},
{
    "title": "The Witcher",
    "author": "Andrzej Sapkowski",
    "pages": 320,
    "read": true
},
{
    "title": "I Have No Mouth, and I Must Scream",
    "author": "Harlan Ellison",
    "pages": 86,
    "read": true
}];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}

refreshLibrary();

function openBookForm() {
    if (bookForm.style.height == "0px") {
        bookForm.style.height = "max-content";
    } else {
        bookForm.style.height = "0px";
    }
    
}

function addBookToLibrary(book) {
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;
    let pages = document.getElementById("Pages").value;
    let read = document.getElementById("Read").checked;
    let newBook = new Book(bookName, authorName, pages, read);
    myLibrary.push(newBook);
    refreshLibrary();
}

function refreshLibrary() {
    libFlex.innerHTML = "";
    myLibrary.forEach((book, i) => {
        displayBookFromLibrary(book, i);
    });
}

function displayBookFromLibrary(book, i) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => {
        myLibrary.splice(i, 1);
        refreshLibrary();
    })
    const readCheck = document.createElement("input");
    readCheck.type = "checkbox";
    readCheck.checked = book.read;
    readCheck.addEventListener("change", function() {
        if (this.checked) {
            myLibrary[i].read = true;
        } else {
            myLibrary[i].read = false;
        }
        console.log(myLibrary[i]);
    })

    div.className = "bookContainer";
    h3.className  = "bookTitle";
    h5.className  = "bookAuthor";
    p.className  = "bookPages";
    readCheck.className  = "bookRead";
    deleteButton.className  = "bookDelete";
    h3.innerHTML = book.title;
    h5.innerHTML = book.author;
    p.innerHTML = book.pages;
    deleteButton.innerHTML = "delete";
    div.appendChild(h3);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(readCheck);
    div.appendChild(deleteButton);
    libFlex.appendChild(div);
}
// HTML + CSS variables 
const Body = document.body
const container = Body.querySelector("container")
const tableBody = Body.querySelector("tbody")
const bookAddForm = document.getElementById("bookAddForm")
const newBookButton = document.getElementById("newBook")
const newBookDialog = document.getElementById("bookAdd") 


/* Variable declarations */
let myLibrary = [];

/* Function declarations */
function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if (read === true) {
            return title + " by " + author + ", " + pages + ", " + "Has been read"
        }
        else if (read === false) {
            return title + " by " + author + ", " + pages + ", " + "not read yet"
        }
    }
}


function addBookToLibrary(title,author,pages,read,) {
    let bookToAdd  = new Book(title,author,pages,read)
    myLibrary.push(bookToAdd)
}

addBookToLibrary("Phoenix","SF SAID","280",true)
addBookToLibrary("Varjak Paw","SF SAID","195",false)

function libraryDisplayer() {
    for (bookToAdd in myLibrary) {
        tableBody.insertRow(bookToAdd)
        for(let i = 0; i < 4; i++) {
            tableBody.rows[bookToAdd].insertCell(i)
        }
        tableBody.rows[bookToAdd].cells[0].textContent = myLibrary[bookToAdd].title
        tableBody.rows[bookToAdd].cells[1].textContent = myLibrary[bookToAdd].author
        tableBody.rows[bookToAdd].cells[2].textContent = myLibrary[bookToAdd].pages
        tableBody.rows[bookToAdd].cells[3].textContent = myLibrary[bookToAdd].read
    }
}
libraryDisplayer()

newBookButton.addEventListener("click" , onOpen)
function onOpen() {
    newBookDialog.showModal();
}
newBookDialog.addEventListener("submit", bookAdder)

function bookAdder() {
    console.log(document.querySelector("#Title").value)
    let title = document.querySelector("#Title").value
    let author = document.querySelector("#Author").value
    let pages = document.querySelector("#Pages").value
    let read = document.querySelector("input[type=radio]:checked").value
    let rowCount = tableBody.rows.length;
    for (let i = rowCount-1; i >= 0; i--) {
        tableBody.deleteRow(i);
    }
    addBookToLibrary(title,author,pages,read)
    libraryDisplayer()
}

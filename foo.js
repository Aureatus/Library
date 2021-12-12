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
    this.readStatus = function() {
        return read = !read
    }
}


function addBookToLibrary(title,author,pages,read,) {
    let bookToAdd  = new Book(title,author,pages,read)
    myLibrary.push(bookToAdd)
}

function libraryDisplayer() {
    for (bookToAdd in myLibrary) {
        tableBody.insertRow(bookToAdd)
        for(let i = 0; i < 4; i++) {
            tableBody.rows[bookToAdd].insertCell(i)
        }
        const deleteButtonCreation = document.createElement("button")
        deleteButtonCreation.textContent = "Delete"
        deleteButtonCreation.id = "del-button"
        deleteButtonCreation.dataset.libraryIndex = bookToAdd
        tableBody.rows[bookToAdd].appendChild(deleteButtonCreation)
        deleteButtonCreation.addEventListener("click", deleteButton)
        const readToggleButtonCreation = document.createElement("button")
        readToggleButtonCreation.textContent = "Read-toggle"
        readToggleButtonCreation.id = "read-change"
        readToggleButtonCreation.dataset.readToggle = bookToAdd
        tableBody.rows[bookToAdd].appendChild(readToggleButtonCreation)
        readToggleButtonCreation.addEventListener("click", readToggleButton)
        tableBody.rows[bookToAdd].cells[0].textContent = myLibrary[bookToAdd].title
        tableBody.rows[bookToAdd].cells[1].textContent = myLibrary[bookToAdd].author
        tableBody.rows[bookToAdd].cells[2].textContent = myLibrary[bookToAdd].pages
        tableBody.rows[bookToAdd].cells[3].textContent = myLibrary[bookToAdd].read
    }
}

newBookButton.addEventListener("click" , onOpen)
function onOpen() {
    newBookDialog.showModal();
}
newBookDialog.addEventListener("submit", bookAdder)

function bookAdder() {
    let title = document.querySelector("#Title").value
    let author = document.querySelector("#Author").value
    let pages = document.querySelector("#Pages").value
    let read = document.querySelector("input[type=radio]:checked").value
    if (read === "true") {
        read = true
    }
    else if (read === "false") {
        read = false
    }
    let rowCount = tableBody.rows.length;
    for (let i = rowCount-1; i >= 0; i--) {
        tableBody.deleteRow(i);
    }
    addBookToLibrary(title,author,pages,read)
    libraryDisplayer()
}

function deleteButton() {
    let rowCount = tableBody.rows.length;
    for (let i = rowCount-1; i >= 0; i--) {
        tableBody.deleteRow(i);
    }
    myLibrary.splice([this.dataset.libraryIndex],1)
    libraryDisplayer()
}

function readToggleButton() {
    let rowCount = tableBody.rows.length;
    for (let i = rowCount-1; i >= 0; i--) {
        tableBody.deleteRow(i);
    }
    myLibrary[this.dataset.readToggle].read = myLibrary[this.dataset.readToggle].readStatus()
    console.log(myLibrary)
    libraryDisplayer()
}
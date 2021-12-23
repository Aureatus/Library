const newBookDialog = document.getElementById("bookAdd")
class Book {
    constructor(title,author,pages,read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.readStatus = function() {
            return read = !read
        }
    }
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(title,author,pages,read) {
        let bookToAdd = new Book(title,author,pages,read)
        library.books.push(bookToAdd)
    }

    deleteBook(title,author,pages,read) {
        let bookToRemove = new Book(title,author,pages,read)
        let index = library.books.findIndex(Book => Book === bookToRemove)
        library.books.splice(index)
    }
}

const library = new Library()

class displayController {
    constructor() {

    }
    

    onOpen() {
        const newBookDialog = document.getElementById("bookAdd")
        const bookAddForm = document.getElementById("bookAddForm")
        newBookDialog.showModal();
    }
    
    newBookEventListener() {
        const newBookButton = document.getElementById("newBook")
        newBookButton.addEventListener("click" , this.onOpen)
    }

    
    libraryDisplayer() {
        const Body = document.body
        const tableBody = Body.querySelector("tbody")
        for (let item in library.books) {
            tableBody.insertRow(item)
            for(let i = 0; i < 4; i++) {
                tableBody.rows[item].insertCell(i)
            }

            const deleteButtonCreation = document.createElement("button")
            deleteButtonCreation.textContent = "Delete"
            deleteButtonCreation.id = "del-button"
            deleteButtonCreation.dataset.libraryIndex = item
            tableBody.rows[item].appendChild(deleteButtonCreation)
            deleteButtonCreation.addEventListener("click", (evt) => {
                this.deleteButton(evt.target)
            })

            const readToggleButtonCreation = document.createElement("button")
            readToggleButtonCreation.textContent = "Read-toggle"
            readToggleButtonCreation.id = "read-change"
            readToggleButtonCreation.dataset.readToggle = item
            tableBody.rows[item].appendChild(readToggleButtonCreation)
            readToggleButtonCreation.addEventListener("click", (evt) => {this.readToggle(evt.target)})

            tableBody.rows[item].cells[0].textContent = library.books[item].title
            tableBody.rows[item].cells[1].textContent = library.books[item].author
            tableBody.rows[item].cells[2].textContent = library.books[item].pages
            tableBody.rows[item].cells[3].textContent = library.books[item].read
        }
    }

    deleteButton(input) {
        const Body = document.body
        const tableBody = Body.querySelector("tbody")
        let rowCount = tableBody.rows.length;
        for (let i = rowCount-1; i >= 0; i--) {
            tableBody.deleteRow(i);
        }
        let index = input.dataset.libraryIndex
        library.deleteBook(library.books[index].title,library.books[index].author,library.books[index].pages,library.books[index].read)
        this.libraryDisplayer()
    }
    newBook() {
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
        const Body = document.body
        const tableBody = Body.querySelector("tbody")
        let rowCount = tableBody.rows.length;
        for (let i = rowCount-1; i >= 0; i--) {
            tableBody.deleteRow(i);
        }
        library.addBook(title,author,pages,read)
    }

    readToggle(input) {
        const Body = document.body
        const tableBody = Body.querySelector("tbody")
        let index = input.dataset.readToggle
        console.log(index)
        library.books[index].read = library.books[index].readStatus()
        let rowCount = tableBody.rows.length;
        for (let i = rowCount-1; i >= 0; i--) {
            tableBody.deleteRow(i);
        }
        this.libraryDisplayer()
        
    }
}

const display = new displayController()

display.newBookEventListener()
newBookDialog.addEventListener("submit", () => {
    display.newBook()
    display.libraryDisplayer()
})
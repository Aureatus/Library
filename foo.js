/* Variable declarations */
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

let myLibrary = [];


function addBookToLibrary(title,author,pages,read,) {
    let book  = new Book(title,author,pages,read)
    myLibrary.push(book)
}

addBookToLibrary("Phoenix","SF SAID","280",true)
addBookToLibrary("Varjak Paw","SF SAID","195",false)
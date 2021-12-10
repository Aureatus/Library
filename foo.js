/*Write a constructor for making “Book” objects. 
We will revisit this in the project at the end of this lesson. 
Your book objects should have the book’s title, author, the number of pages, 
and whether or not you have read the book.*/

function bookCreator (title,author,pages,read) {
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
const theHobbit = new bookCreator("The Hobbit","J.R.R. Tolkien","295 pages", false)

theHobbit.info()
console.log(theHobbit.info())
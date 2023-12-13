const { template } = require('@babel/core')
//your student id, firstname, and lastname here

class Book {
    constructor(isbn,title = 'untitled',ebook = false){
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }

    
    addAuthor(fn,ln){
        this.authors.push({"firstname" : fn , "lastname" : ln})
        this.authors.push()
        return this.authors.length
    }
    getFirstAuthor(){
        return this.authors[0]
    }
    getCoAuthors(){
        if (this.authors < 2) {
            return []
        }
        return this.authors.slice(1)
    }
    findAuthor(firstname,lastname){
        return this.authors.find((author) => 
        author.firstname.toLowerCase() === firstname.toLowerCase() && 
        author.lastname.toLowerCase() === lastname.toLowerCase())
    }
    hasEbook(){
        return this.ebook
    }
}
module.exports = Book

const { template } = require('@babel/core')
class Book {
    constructor(isbn,totalPages=0){
        this.isbn = isbn
        this.totalPages = totalPages
        this.bookMarks = []
    }
    addBookMark(pageNumber){
        if (pageNumber < 1 || pageNumber > this.totalPages) {
            return this.bookMarks.length
        }
        this.bookMarks.push(pageNumber)
        return this.bookMarks.length
    }
    removeBookMark(pageNumber){
        const index = this.bookMarks.indexOf(pageNumber)
        if (index === -1) {
            return undefined
        }
        this.bookMarks.splice(index,1)
        return pageNumber
    }
    goToFirstBookMark(){
        return this.bookMarks[0]
    }
    goToLastBookMark(){
        return this.bookMarks[this.bookMarks.length-1]
    }
    getBookMarks(){
        return this.bookMarks
    }
}

module.exports = Book
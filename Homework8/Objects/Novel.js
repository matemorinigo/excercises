const Book = require('./Book').Book;
class Novel extends Book{
    constructor(isbn, title, author, price, availability, plot) {
        super(isbn, title, author, price, availability);
        this._plot = plot;
    }

    getInfo() {
        super.getInfo();
        console.log("Plot: " + this._plot);
    }

}

module.exports = {Novel};
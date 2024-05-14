class Book{

    constructor(isbn, title, author, price, availability){
        this._isbn = isbn;
        this._title = title;
        this._author = author;
        this._price = price;
        this._availability = availability;
    }

    getInfo(){
        console.log("ISBN: " + this._isbn);
        console.log("Title: " + this._title);
        console.log("Author: " + this._author);
        console.log("Price: $" + this._price);
        console.log("Availability: " + this._availability);
    }

    equals(book){
        return this._isbn === book.isbn;
    }

    get isbn() {
        return this._isbn;
    }

    get price(){
        return this._price;
    }

    set availability(value) {
        this._availability = value;
    }
}

module.exports = {Book};
class Book{

    constructor(title, author, isbn, price, availability){
        this._title = title;
        this._author = author;
        this._isbn = isbn;
        this._price = price;
        this._availability = availability;
    }


    set availability(value) {
        this._availability = value;
    }
}

module.exports = {Book};
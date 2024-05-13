const Book = require('Homework8/Objects/Book').Book;

class EducationalBook extends Book{
    constructor(isbn, title, author, price, availability,topics) {
        super(isbn, title, author, price, availability);
        this._topics = topics;
    }

    getInfo() {
        super.getInfo();
        console.log("Topics covered: ")
        for(topic of topics){
            console.log('\t' + topic);
        }
    }

}
const Book = require('./Book').Book;

class EducationalBook extends Book{
    constructor(isbn, title, author, price, availability,topics) {
        super(isbn, title, author, price, availability);
        this._topics = topics;
    }

    getInfo() {
        super.getInfo();
        console.log("Topics covered: ")
        for(let topic of this._topics){
            console.log('\t' + topic);
        }
    }

}

module.exports = {EducationalBook};
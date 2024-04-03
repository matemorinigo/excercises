class DivisionByZeroException extends Error{
    constructor(msg) {
        super(msg);
        this.name = "DivisionByZeroException";
    }
}

module.exports = DivisionByZeroException;
const CHAR_CODE_ZERO = 48;

String.prototype.compare = function (string) {
    if (this.length > string.length)
        return 1;
    else if (string.length > this.length)
        return -1;
    else {
        let a, b;
        for (let i = 0; i < this.length; i++) {
            a = this.charCodeAt(i) - CHAR_CODE_ZERO;
            b = string.charCodeAt(i) - CHAR_CODE_ZERO;

            if (a > b)
                return 1;
            else if (b < a)
                return -1;
        }
        return 0;
    }
}

/*String.plus(string): This function should take another string
 as input and return the result of adding the two strings together.*/

String.prototype.plus = function (string) {
    let strCursor1 = this.length - 1;
    let strCursor2 = string.length - 1;
    let a, b, c;
    let carry = 0;
    let temp = ""


    while (strCursor1 >= 0 && strCursor2 >= 0) {
        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO;
        b = string.charCodeAt(strCursor2) - CHAR_CODE_ZERO;
        c = a + b + carry;
        carry = (c - (c % 10)) / 10;
        temp = (c % 10).toString() + temp;

        --strCursor1;
        --strCursor2;
    }

    while (strCursor1 >= 0) {
        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO;
        c = a + carry;
        carry = (c - (c % 10)) / 10;
        temp = "".concat((c % 10).toString(), temp);
        --strCursor1;
    }

    while (strCursor2 >= 0) {
        b = string.charCodeAt(strCursor2) - CHAR_CODE_ZERO;
        c = b + carry;
        carry = (c - (c % 10)) / 10;
        temp = "".concat((c % 10).toString(), temp);
        --strCursor2;
    }

    return temp;

}

/*String.minus(string): This function should take another string as input
 and return the result of subtracting the second string from the first string.
 Note that the first parameter will always be greater than the second parameter*/

String.prototype.minus = function (string) {
    if (this.compare(string) === -1)
        throw "Second parameter is greater than the first parameter";

    let strCursor1 = this.length - 1;
    let strCursor2 = string.length - 1;
    let loan = 0;
    let a, b, c;
    let temp = "";

    while (strCursor1 >= 0 && strCursor2 >= 0) {
        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO - loan;
        b = string.charCodeAt(strCursor2) - CHAR_CODE_ZERO;

        if (a < b) {
            loan = 1;
            a += 10;
        } else
            loan = 0;

        c = a - b;
        temp = c + temp;

        --strCursor1;
        --strCursor2;
    }

    while (strCursor1 >= 0) {
        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO - loan;
        temp = a + temp;
        loan = 0;
        --strCursor1;
    }


    return temp;
}

/*String.divide(string): This function should take another string as input and return
 the result of dividing the first string by the second string. Division should only
 result in an integer value.*/

String.prototype.divide = function (string) {
    let temp = this;
    let result = 0;
    let zero = "0".repeat(temp.length);

    if (string.compare(zero) === 0)
        throw "Division by zero";

    //Im not sure about this way to solve the comparison with 0
    while (temp.compare(zero) > 0) {
        temp = temp.minus(string);
        ++result;
    }

    return result.toString();

}

/*String.multiply(string): This function should take another string as input
 and return the result of multiplying the two strings together.*/

String.prototype.multiply = function (string) {

    const zero = "0".repeat((string.length));
    const one = zero.plus("1");

    let temp = string;
    let result = "0";

    if (temp.compare(zero) === 0)
        return "0";


    while (temp.compare(zero) > 0) {
        result = result.plus(this);
        temp = temp.minus(one);
    }

    return result;
}

console.log("9007199254740992".plus("112312"));
console.log(9007199254740992n + 112312n);

console.log("90071992547409911111111115".minus("231"));
console.log(90071992547409911111111115n - 231n);

console.log("180143985094819822222222230".divide("90071992547409911111111115"));
console.log(180143985094819822222222230n / 90071992547409911111111115n);

console.log("180143985094819822222222230".multiply("2"));
console.log(180143985094819822222222230n * 2n);
const CHAR_CODE_ZERO = 48;

const DivisionByZeroException = require('./DivisionByZeroException');

String.prototype.deleteLeftZero = function(){
    let cursor = 0;
    let trimmed = this;
    while(cursor<this.length-1 && (this.charCodeAt(cursor)-CHAR_CODE_ZERO) === 0){
        trimmed = this.substring(++cursor,this.length);
    }

    return trimmed;
}

String.prototype.compare = function (string) {
    let thisTrimmed = this.deleteLeftZero();
    let stringTrimmed = string.deleteLeftZero();

    if (thisTrimmed.length > stringTrimmed.length)
        return 1;
    else if (stringTrimmed.length > thisTrimmed.length)
        return -1;
    else {
        let a, b;
        for (let i = 0; i < this.length; i++) {
            a = thisTrimmed.charCodeAt(i) - CHAR_CODE_ZERO;
            b = stringTrimmed.charCodeAt(i) - CHAR_CODE_ZERO;

            if (a > b)
                return 1;
            else if (b > a)
                return -1;
        }
        return 0;
    }
}

/*String.plus(string): This function should take another string
 as input and return the result of adding the two strings together.*/

String.prototype.plus = function (addend) {
    let strCursor1 = this.length - 1;
    let strCursor2 = addend.length - 1;
    let a, b, c;
    let carry = 0;
    let sum = ""


    while (strCursor1 >= 0 && strCursor2 >= 0) {
        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO;
        b = addend.charCodeAt(strCursor2) - CHAR_CODE_ZERO;
        c = a + b + carry;
        carry = (c - (c % 10)) / 10;
        sum = (c % 10).toString() + sum;

        --strCursor1;
        --strCursor2;
    }

    while (strCursor1 >= 0) {
        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO;
        c = a + carry;
        carry = (c - (c % 10)) / 10;
        sum = "".concat((c % 10).toString(), sum);
        --strCursor1;
    }

    while (strCursor2 >= 0) {
        b = addend.charCodeAt(strCursor2) - CHAR_CODE_ZERO;
        c = b + carry;
        carry = (c - (c % 10)) / 10;
        sum = "".concat((c % 10).toString(), sum);
        --strCursor2;
    }

    return sum;

}

/*String.minus(string): This function should take another string as input
 and return the result of subtracting the second string from the first string.
 Note that the first parameter will always be greater than the second parameter*/

String.prototype.minus = function (substrahend) {
    if (this.compare(substrahend) === -1)
        throw "Second parameter is greater than the first parameter";

    let strCursor1 = this.length - 1;
    let strCursor2 = substrahend.length - 1;
    let loan = 0;
    let a, b, c;
    let difference = "";

    while (strCursor1 >= 0 && strCursor2 >= 0) {
        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO - loan;
        b = substrahend.charCodeAt(strCursor2) - CHAR_CODE_ZERO;

        if (a < b) {
            loan = 1;
            a += 10;
        } else
            loan = 0;

        c = a - b;
        difference = c + difference;

        --strCursor1;
        --strCursor2;
    }

    while (strCursor1 >= 0) {

        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO - loan;

        if(loan === 1 && strCursor1 !==0){
            if (a<loan) {
                loan = 1;
                a += 10;
            } else
                loan = 0;
        }

        difference = a + difference;
        c = a;
        --strCursor1;
    }


    return difference.deleteLeftZero().toString();
}

/*String.divide(string): This function should take another string as input and return
 the result of dividing the first string by the second string. Division should only
 result in an integer value.*/

String.prototype.divide = function (divisor) {
    let selectedChars = 1;
    let selectedDividend = this.substring(0,selectedChars);
    let charsLeft = this.length-1;
    let tempDividend = this;
    let quotient = "0";

    if(divisor.compare("0") === 0){
        throw new DivisionByZeroException("Division by zero");
    }

    while(charsLeft >= 0 && selectedChars<=this.length){

        if(divisor.compare(selectedDividend) > 0){
            selectedDividend = tempDividend.substring(0,++selectedChars);
            --charsLeft;
        }
        else{
            tempDividend = selectedDividend.minus(divisor).deleteLeftZero() + tempDividend.substring(selectedChars, tempDividend.length);
            quotient = quotient.plus("1" + "0".repeat(charsLeft));
            selectedDividend = tempDividend.substring(0,1);
            charsLeft = tempDividend.length-1;
            selectedChars = 1;
        }


    }
    return quotient;


}

/*String.multiply(string): This function should take another string as input
 and return the result of multiplying the two strings together.*/

String.prototype.multiply = function (factor) {
    let multiplicandCursor;
    let factorCursor = factor.length-1;
    let factorNum, multiplicandNum, temp, carry, tempResult = "0", result = "0";

    for(factorCursor; factorCursor>=0; factorCursor--){
        multiplicandCursor = this.length-1;
        factorNum = (factor.charCodeAt(factorCursor) - CHAR_CODE_ZERO);
        carry = 0;

        while(multiplicandCursor >=0){
            multiplicandNum = this.charCodeAt(multiplicandCursor) - CHAR_CODE_ZERO;

            temp = (factorNum * multiplicandNum) + carry;
            carry = (temp - (temp % 10)) / 10;
            tempResult = tempResult.plus(((temp%10).toString() + "0".repeat((this.length-1)-multiplicandCursor)));

            --multiplicandCursor;
        }

        if(carry !== 0){
            tempResult = tempResult.plus((carry.toString() + "0".repeat((this.length-1)-multiplicandCursor)))
        }

        result = result.plus(tempResult + "0".repeat((factor.length-1)-factorCursor));
        tempResult = "0"

    }


    return result;

}

console.log("plus");
console.log("9099999999999999999999999909999999999999999993242419999999999999999".plus("93223999999999909777777799999995444444"));
console.log(9099999999999999999999999909999999999999999993242419999999999999999n + 93223999999999909777777799999995444444n);

console.log();
console.log("minus");
console.log("4444444444444444444444444444444440".minus("2"));
console.log(4444444444444444444444444444444440n - 2n);

console.log();
console.log("divide");

try {
    console.log("9099999999999999999999999909999999999999999993242419999999999999999".divide("0"));
}catch(e){
    console.error(e);
}
console.log("9099999999999999999999999909999999999999999993242419999999999999999".divide("93223999999999909777777799999995444444"));
console.log(9099999999999999999999999909999999999999999993242419999999999999999n / 93223999999999909777777799999995444444n);

console.log();
console.log("multiply");
console.log("9099999999999999999999999909999999999999999993242419999999999999999".multiply("93223999999999909777777799999995444444"));
console.log(9099999999999999999999999909999999999999999993242419999999999999999n * 93223999999999909777777799999995444444n);

console.log();
console.log("4".multiply("3"));
console.log("1000".minus("1"));




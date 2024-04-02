const CHAR_CODE_ZERO = 48;

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
    let tempString = "";

    while (strCursor1 >= 0 && strCursor2 >= 0) {
        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO - loan;
        b = string.charCodeAt(strCursor2) - CHAR_CODE_ZERO;

        if (a < b) {
            loan = 1;
            a += 10;
        } else
            loan = 0;

        c = a - b;
        tempString = c + tempString;

        --strCursor1;
        --strCursor2;
    }

    while (strCursor1 >= 0) {

        a = this.charCodeAt(strCursor1) - CHAR_CODE_ZERO - loan;

        if(loan === 1 && strCursor1 !==0){
            if (a<c) {
                loan = 1;
                a += 10;
            } else
                loan = 0;
        }

        tempString = a + tempString;
        c = a;
        --strCursor1;
    }


    return tempString.deleteLeftZero().toString();
}

/*String.divide(string): This function should take another string as input and return
 the result of dividing the first string by the second string. Division should only
 result in an integer value.*/

String.prototype.divide = function (divisor) {
    let charsAgarrados = 1;
    let dividendoTemp = this.substring(0,charsAgarrados);
    let charsLeft = this.length-1;
    let temp = this;
    let result = "0";

    while(charsLeft >= 0 && charsAgarrados<=this.length){

        if(divisor.compare(dividendoTemp) > 0){
            dividendoTemp = temp.substring(0,++charsAgarrados);
            --charsLeft;
        }
        else{
            temp = dividendoTemp.minus(divisor).deleteLeftZero() + temp.substring(charsAgarrados, temp.length);
            result = result.plus("1" + "0".repeat(charsLeft));
            dividendoTemp = temp.substring(0,1);
            charsLeft = temp.length-1;
            charsAgarrados = 1;
        }


    }
    return result;


}

/*String.multiply(string): This function should take another string as input
 and return the result of multiplying the two strings together.*/

String.prototype.multiply = function (multiplier) {
    let multiplicandCursor;
    let multiplierCursor = multiplier.length-1;
    let multiplierNum, multiplicandNum, temp, carry, tempResult = "0", result = "0";

    for(multiplierCursor; multiplierCursor>=0; multiplierCursor--){
        multiplicandCursor = this.length-1;
        multiplierNum = (multiplier.charCodeAt(multiplierCursor) - CHAR_CODE_ZERO);
        carry = 0;

        while(multiplicandCursor >=0){
            multiplicandNum = this.charCodeAt(multiplicandCursor) - CHAR_CODE_ZERO;

            temp = (multiplierNum * multiplicandNum) + carry;
            carry = (temp - (temp % 10)) / 10;
            tempResult = tempResult.plus(((temp%10).toString() + "0".repeat((this.length-1)-multiplicandCursor)));

            --multiplicandCursor;
        }

        if(carry !== 0){
            tempResult = tempResult.plus((carry.toString() + "0".repeat((this.length-1)-multiplicandCursor)))
        }

        result = result.plus(tempResult + "0".repeat((multiplier.length-1)-multiplierCursor));
        tempResult = "0"

    }


    return result;

}

console.log();
console.log("9099999999999999999999999909999999999999999993242419999999999999999".plus("93223999999999909777777799999995444444"));
console.log(9099999999999999999999999909999999999999999993242419999999999999999n + 93223999999999909777777799999995444444n);

console.log();
console.log("9099999999999999999999999909999999999999999993242419999999999999999".minus("93223999999999909777777799999995444444"));
console.log(9099999999999999999999999909999999999999999993242419999999999999999n - 93223999999999909777777799999995444444n);

console.log();
console.log("9099999999999999999999999909999999999999999993242419999999999999999".divide("93223999999999909777777799999995444444"));
console.log(9099999999999999999999999909999999999999999993242419999999999999999n / 93223999999999909777777799999995444444n);

console.log();
console.log("9099999999999999999999999909999999999999999993242419999999999999999".multiply("93223999999999909777777799999995444444"));
console.log(9099999999999999999999999909999999999999999993242419999999999999999n * 93223999999999909777777799999995444444n);

//XD
console.log("4".multiply("3"));
console.log("1000".minus("1"));

console.log();



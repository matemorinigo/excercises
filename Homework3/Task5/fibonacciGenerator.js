function fibonacciGenerator(){
    let i = 0
    let prev1 = 0;
    let prev2 = 0;
    let result = 0;
    return function (){
        if(i === 0){
            result = 0
        }
        else if(i === 1){
            prev1 = 1;
            result = 1;
        }
        else if (i > 1){
            result = prev1 + prev2;
            prev2 = prev1;
            prev1 = result;

        }
        i++;
        return result;

    }
}

module.exports = {fibonacciGenerator};




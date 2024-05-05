function curry(func,arity){
    return function(arg){
        if(arity<=1){
            return func(arg);
        }
        else{
            return curry(func.bind(null,arg),arity-1);
        }
    }

}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4);
// Returns the final result: 2 * 3 * 4 = 24

module.exports = {curry};

console.log("Result:", result); // Expected: 24



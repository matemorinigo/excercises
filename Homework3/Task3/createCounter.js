const createCounter = () => {
    let counter = 0;
    return function (){
        counter++;
        return counter;
    };
}

const a = createCounter();
const b = createCounter();

console.log(a());
console.log(a());
console.log(a());


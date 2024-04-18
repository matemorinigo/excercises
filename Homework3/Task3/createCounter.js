const createCounter = () => {
    let counter = 0;
    return function (){
        counter++;
        return counter;
    };
}

module.exports = {createCounter};



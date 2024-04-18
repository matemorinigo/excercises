//is the implementation OK?
function repeatFunction(fn, n){
    let counter = n;
    return function (){
        while(counter !== 0){
            fn();
            counter--;
        }
    }
}

module.exports = {repeatFunction};


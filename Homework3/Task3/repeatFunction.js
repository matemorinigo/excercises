//is the implementation OK?
function repeatFunction(fn, n){
    let counter = n;
    return function (){
        while(counter !== 0){
            if(n<0)
                break;
            fn();
            counter--;
        }
    }
}

module.exports = {repeatFunction};


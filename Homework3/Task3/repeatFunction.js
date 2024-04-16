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

function printf(){
    console.log("printf");
}

let a = repeatFunction(printf, -1);
a();
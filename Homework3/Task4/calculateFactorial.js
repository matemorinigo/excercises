const {spacesWithMsg} = require("../util/spacesWithMsg");

function calculateFactorial(n, acum=1n){
    if(n<=0n){
        return acum;
    }else{
        return calculateFactorial(BigInt(n) - 1n,BigInt(n)*acum);
    }

}

function factorialWithoutTCO(n){
    if(n<=0n){
        return 1n;
    }
    else{
        return BigInt(n) * factorialWithoutTCO(BigInt(n)-1n);
    }
}
try{
    console.log(calculateFactorial(8000));
    console.log(calculateFactorial(1000));
}catch(e){
    console.error(e);
}

spacesWithMsg(10,"---------------------------WITHOUT TCO-------------------------------");

console.log(factorialWithoutTCO(8000));


spacesWithMsg(10,"---------------------------TCO Exceed the stack faster than without TCO-------------------------------");

try{

    console.log(calculateFactorial(10000));
}catch(e){
    console.error(e);
}

spacesWithMsg(10,"---------------------------WITHOUT TCO-------------------------------");

console.log(factorialWithoutTCO(10000));
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

module.exports = {calculateFactorial,factorialWithoutTCO};

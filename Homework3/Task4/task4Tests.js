const {spacesWithMsg} = require("../util/spacesWithMsg");

spacesWithMsg(50,"---------------------------factorial-------------------------------");

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

spacesWithMsg(50,"---------------------------power-------------------------------");


console.log(power(6600,6600));

spacesWithMsg(10, "---------------------------WITHOUT TCO-------------------------------");

console.log(powerWithoutTCO(7600,7600));

spacesWithMsg(10,"---------------------------TCO Exceed the stack faster than without TCO-------------------------------");

try{
    console.log(power(8600,8600));
}catch (e) {
    console.error(e);
}

spacesWithMsg(10, "---------------------------WITHOUT TCO-------------------------------");

console.log(powerWithoutTCO(8600,8600));
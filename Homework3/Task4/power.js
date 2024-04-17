const {spacesWithMsg} = require("../util/spacesWithMsg");

function power(base,exp, acum=1n){
    if(exp<=0){
        return BigInt(acum);
    }
    else{
        return power(base,exp-1,BigInt(acum)*BigInt(base));
    }
}

function powerWithoutTCO(base,exp){
    if(exp<=0){
        return 1n;
    }
    else{
        return BigInt(base) * powerWithoutTCO(base,exp-1);
    }
}

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
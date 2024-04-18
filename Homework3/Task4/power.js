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

module.exports = {power,powerWithoutTCO};


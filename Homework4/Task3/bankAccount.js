//_balance have to be non-writable? -> access to _balance with Object.getOwnPropertyDescriptor()?
let bankAccount = {
    _balance: 1000,
    get formattedBalance(){
        return `$${this._balance}`;
    },
    set balance(value){
        if(value<0){
            throw Error("Balance cannot be negative");
        }
        else{
            this._balance = value;
        }
    },
    transfer(acc1,acc2,amount){
        if(amount<0){
            throw Error("Amount cannot be negative");
        }else if(amount>acc1._balance) {
            throw Error("Not enough balance");
        }else if(acc1 === acc2){
            throw Error("Cannot transfer to the same account");
        }
        acc1._balance -= amount;
        acc2._balance += amount;
    }
}

const deepCloneObject = require('../Task6/deepCloneObject').deepCloneObject;
//creating new acc by this way, we cannot modify acc without modifiying bankAccount
let acc = deepCloneObject(bankAccount);

console.log(bankAccount.formattedBalance);
bankAccount.transfer(bankAccount, acc, 100);
console.log(bankAccount.formattedBalance);

console.log(acc);

console.log(JSON.stringify(acc,null,2));

module.exports = {bankAccount, acc}


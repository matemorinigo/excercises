function hashFunction(string){
    let secretNumber = 510;
    let notRandomNumber = ((secretNumber>>2)*string.length)%string.length;

    for(let i=0; i<string.length; i++){
        secretNumber = notRandomNumber%string.length + string.charCodeAt(i);
    }

    if(notRandomNumber+1 > 0.5)
        secretNumber = Math.round(secretNumber);
    else
        secretNumber = Math.floor(secretNumber);

    return secretNumber%100;


}

function djb2Hash(str, tableSize) {
    let hash = 5381n; // valor inicial
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5n) + hash) + BigInt(str.charCodeAt(i)); // hash * 33 + c
        hash = hash % BigInt(2 ** 53 - 1); // limit hash to safe integer range
    }
    return Number(hash % BigInt(tableSize));
}

module.exports = {hashFunction, djb2Hash}
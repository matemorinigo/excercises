//Is this an efficient algorithm?
function customShuffle(array){
    let aux;
    let randomPos;

    for(let i = array.length-1; i>=0; i--){
        randomPos = Math.floor(Math.random()*array.length);
        aux = array[randomPos];
        array[randomPos] = array[i];
        array[i] = aux;
    }
}

module.exports = {customShuffle};


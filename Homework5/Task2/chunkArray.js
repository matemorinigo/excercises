//How could be optimized?
function chunkArray(array, chunkSize){
    let mainArr = [];
    let arrQuantity = Math.ceil(array.length/chunkSize);
    let arrIndex = 0;

    while(arrQuantity>0){
        let arr = [];
        let chunkIndex = 0;

        while(chunkIndex<chunkSize){

            if(array[arrIndex] === undefined)
                break;

            arr.push(array[arrIndex]);
            ++arrIndex
            ++chunkIndex;

        }

        mainArr.push(arr);

        --arrQuantity;

    }

    return mainArr;
}

module.exports = {chunkArray};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let chunks = chunkArray(numbers, 3);

console.log(chunks);
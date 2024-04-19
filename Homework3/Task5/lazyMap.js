function lazyMap(arr, func){
    let i = 0;
    return function (){
        if(i<arr.length){
            try{
                let newElem = func(arr[i]);
                i++;
                return newElem;
            }catch (e) {
                console.error(e);
            }
        }
    }
}

module.exports = {lazyMap};




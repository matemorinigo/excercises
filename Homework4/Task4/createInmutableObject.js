function createInmutableObject(obj){
    let newObj = {};

    for(let key in obj){
        if(typeof obj[key] === 'object'){
            Object.defineProperty(newObj, key, {
                value: createInmutableObject(obj[key]),
                writable: false,
                enumerable: true
            });
        }else{
            Object.defineProperty(newObj, key, {
                    value: obj[key],
                    writable: false,
                    enumerable: true,
            });
        }
    }
    return newObj;
}


module.exports = {createInmutableObject};

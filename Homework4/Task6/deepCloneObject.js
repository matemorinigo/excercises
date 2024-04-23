//is this the most efficient way without using libraries?
function deepCloneObject(obj){
    let clone = {};

    let descriptor;

    for(let key in obj){
        descriptor = Object.getOwnPropertyDescriptor(obj, key);

        if(typeof obj[key] === 'object'){
            Object.defineProperty(clone, key, {
                value: deepCloneObject(obj[key]),
                writable: descriptor.writable,
                enumerable: descriptor.enumerable,
                configurable: descriptor.configurable
            });
        }else{

            if(descriptor.get !== undefined){
                Object.defineProperty(clone, key, {
                    get: descriptor.get,
                    enumerable: descriptor.enumerable,
                    configurable: descriptor.configurable
                });
            }else if(descriptor.set !== undefined){
                Object.defineProperty(clone, key, {
                    set: descriptor.set,
                    enumerable: descriptor.enumerable,
                    configurable: descriptor.configurable
                });
            }else{
                Object.defineProperty(clone, key, {
                    value: obj[key],
                    writable: descriptor.writable,
                    enumerable: descriptor.enumerable,
                    configurable: descriptor.configurable
                });
            }
        }
    }

    return clone;

}


module.exports = {deepCloneObject};
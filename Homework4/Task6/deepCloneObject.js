//is this the most efficient way without using libraries?
function deepCloneObject(obj, visited = []){
    let clone = Array.isArray(obj) ? [] : {};

    if(visited.includes(obj)){
        return
    }else{
        visited.push(obj);
    }

    let descriptor = Object.getOwnPropertyDescriptors(obj);

    for(let key in descriptor) {
        if(typeof obj[key] === 'object'){
            Object.defineProperty(clone, key, {
                value: deepCloneObject(obj[key], visited),
                writable: descriptor[key].writable,
                enumerable: descriptor[key].enumerable,
                configurable: descriptor[key].configurable
            });
        }else{

            if(descriptor.get !== undefined){
                Object.defineProperty(clone, key, {
                    get: descriptor[key].get,
                    enumerable: descriptor[key].enumerable,
                    configurable: descriptor[key].configurable
                });
            }else if(descriptor.set !== undefined){
                Object.defineProperty(clone, key, {
                    set: descriptor[key].set,
                    enumerable: descriptor[key].enumerable,
                    configurable: descriptor[key].configurable
                });
            }else{
                Object.defineProperty(clone, key, {
                    value: descriptor[key].value,
                    writable: descriptor[key].writable,
                    enumerable: descriptor[key].enumerable,
                    configurable: descriptor[key].configurable
                });
            }
        }
    }

    return clone;

}


module.exports = {deepCloneObject};
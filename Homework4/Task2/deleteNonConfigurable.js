function deleteNonConfigurable(obj, prop){
    if(Object.getOwnPropertyDescriptor(obj, prop).configurable){
        delete obj[prop];
        return;
    }
    throw Error("The property is non configurable");
}

module.exports = {deleteNonConfigurable};
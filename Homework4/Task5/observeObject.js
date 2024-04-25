const person = require('../Task1/person').person;
function observeObject(obj, callback){
    return new Proxy(obj, {
        get: function (target, prop){
            console.log(`${prop} - get`);
            callback(target, prop)

        },
        set: function (target, prop){
            console.log(`${prop} - set`);
            callback(target, prop);
        }
    })
}

let proxyPerson = observeObject(person, (obj, prop) =>{
    console.log(obj[prop]);
})

let a = proxyPerson._firstName
proxyPerson._firstName = "Jane"; //it invokes the callback function despite that the property is non-writable

module.exports = {observeObject};
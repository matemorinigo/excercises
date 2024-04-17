const p = require('../util/Person');

function getFullName(person){
    if(person === null || person === undefined)
        throw Error("Person is null/undefined");

   return person.getFirstName() + ' ' + person.getLastName();
}

let mateo = new p.Person("Mateo", "Morinigo");

console.log(getFullName(mateo));
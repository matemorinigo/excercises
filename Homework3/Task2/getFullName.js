function getFullName(person){
    if(person === null || person === undefined)
        throw Error("Person is null/undefined");

   return person.getFirstName() + ' ' + person.getLastName();
}

module.exports = {getFullName};


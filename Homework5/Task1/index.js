const customFilterUnique = require('./customFilterUnique').customFilterUnique;

let player1 = {_firstName: "Franco", _lastName: "Mastantuono", _age: 17};
let player2 = { _firstName: "Nicolás", _lastName: "De La Cruz", _age: 24 };
let player3 = { _firstName: "Franco", _lastName: "Armani", _age: 35 };
let player4 = { _firstName: "Gonzalo", _lastName: "Montiel", _age: 25 };
let player5 = { _firstName: "Rafael", _lastName: "Borré", _age: 26 };
let player6 = { _firstName: "Julián", _lastName: "Álvarez", _age: 22 };
let player7 = { _firstName: "Bruno", _lastName: "Zuculini", _age: 29 };
let player8 = { _firstName: "Héctor", _lastName: "Martínez", _age: 23 };
let player9 = { _firstName: "Agustín", _lastName: "Fontana", _age: 23 };
let player10 = { _firstName: "Enzo", _lastName: "Fernández", _age: 23 };
let player11 = { _firstName: "José", _lastName: "Paradela", _age: 24 };

let team = [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11]
    .sort((a,b) => a._age - b._age)

console.log(team);

let eg = [
    {name: 'Tomas'},
    {name: 'Tomas'},
    {name: 'Ilya'},
    {name: 'Alexandrina'}
];

console.log(customFilterUnique(eg, (person) => {
    return true;
}))


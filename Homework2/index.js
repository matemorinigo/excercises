const dT = require('./dataTransformation.js');

//addValue() test cases
console.log(dT.addValues(false,false));
console.log(dT.addValues(true,false));
console.log(dT.addValues(true,true));
console.log(dT.addValues(1,2));
console.log(dT.addValues(1,3.5));
console.log(dT.addValues("1","3"));
try {
    console.log(dT.addValues(1,3n));
}catch (e) {
    console.error(e);
}

try {
    console.log(dT.addValues("1",3n));
}catch (e) {
    console.error(e);
}

try {
    console.log(dT.addValues(1,"1"));
}catch (e) {
    console.error(e);
}

try {
    console.log(dT.addValues(undefined,undefined));
}catch (e) {
    console.error(e);
}

//stringifyValue() test cases
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student = new Student("Mateo", 20);

console.log(dT.stringifyValue(123));
console.log(dT.stringifyValue(123n));
console.log(dT.stringifyValue(12.3));
console.log(dT.stringifyValue("123"));
console.log(dT.stringifyValue([1,2,3]));
console.log(dT.stringifyValue(student));
console.log(dT.stringifyValue(true));
console.log(dT.stringifyValue(NaN));
try {
    console.log(dT.stringifyValue(undefined));
}catch (e) {
    console.error(e);
}

//invertBoolean() test cases
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

try {
    console.log(dT.invertBoolean(undefined));
}catch (e) {
    console.error(e);
}
console.log(dT.invertBoolean(true));
console.log(dT.invertBoolean(false));

//convertToNumber() test cases
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

console.log(dT.convertToNumber("123"));
console.log(dT.convertToNumber("12.3"));
console.log(dT.convertToNumber("12.asd3"));
console.log(dT.convertToNumber("asdsad"));
console.log(dT.convertToNumber(12n));

try{
    console.log(dT.convertToNumber(999999999999999999999999999999999999999999999999999999999999999999999n));
}catch (e) {
    console.error(e);
}

try{
    console.log(dT.convertToNumber(null));
}catch (e) {
    console.error(e);
}

try{
    console.log(dT.convertToNumber(undefined));
}catch (e) {
    console.error(e);
}


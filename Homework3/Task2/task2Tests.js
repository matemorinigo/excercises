const {filterUniqueWords} = require("./filterUniqueWords");
const {Student} = require("../util/Student");
const {getAverageGrade} = require("./getAverageGrade");
const p = require("../util/Person");
const {getFullName} = require("./getFullName");

console.log(filterUniqueWords("hello name koala1451 hHHHello KOALA koala 121 abc lol"));
console.log(filterUniqueWords(""));

let a = new Student("A", "A", 9);
let b = new Student("b", "b", 2);
let c = new Student("c", "c", 2);
let d = new Student("d", "d", 2);

console.log(getAverageGrade([a,b,c,d]));

let mateo = new p.Person("Mateo", "Morinigo");

console.log(getFullName(mateo));
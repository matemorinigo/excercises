const {Student} = require('./util/Student');

//Im not understanding the point free style :(
const getGrades = x => x.reduce((x,y) => x+y.getGrade(),0);
const calculateAverage = (x,y) => x / y.length;

const getAverageGrade = x => calculateAverage(getGrades(x),x);


let a = new Student("A", "A", 9);
let b = new Student("b", "b", 2);
let c = new Student("c", "c", 2);
let d = new Student("d", "d", 2);

console.log(getAverageGrade([a,b,c,d]))
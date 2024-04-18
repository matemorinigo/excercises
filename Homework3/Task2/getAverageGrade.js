const getGrades = x => x.reduce((x,y) => x+y.getGrade(),0);
const calculateAverage = (x,y) => x / y.length;

const getAverageGrade = x => calculateAverage(getGrades(x),x);

module.exports = {getAverageGrade};


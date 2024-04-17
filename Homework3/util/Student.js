const {Person} = require("./Person");


class Student extends Person{
    constructor(firstName, lastName, grade) {
        super(firstName,lastName);
        this.grade = grade;
    }

    getGrade(){
        return this.grade;
    }
}

module.exports = {Student};
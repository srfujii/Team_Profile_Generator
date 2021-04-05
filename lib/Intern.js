const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empName, empId, empEmail, school) {
        super(empName, empId, empEmail);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
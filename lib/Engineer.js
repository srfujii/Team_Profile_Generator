const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empName, empId, empEmail, github) {
        super(empName, empId, empEmail);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
    printInfo() {
        super.printInfo();
        console.log(`Github: ${this.github}`);
    }
}

module.exports = Engineer;
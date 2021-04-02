const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, empId, empEmail, officeNumber) {
        super(empName, empId, empEmail);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    printInfo() {
        super.printInfo();
        console.log(`Office Number: ${this.officeNumber}`);
    }
}

module.exports = Manager;

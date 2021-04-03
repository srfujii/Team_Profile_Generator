const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, empId, empEmail, officeNumber) {
        super(empName, empId, empEmail);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNum() {
        return this.officeNumber;
    }
    
    printInfo() {
        super.printInfo();
        console.log(`Office Number: ${this.officeNumber}`);
    }
}

module.exports = Manager;

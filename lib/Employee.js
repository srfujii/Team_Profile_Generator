class Employee {
    constructor(empName, empId, empEmail) {
      this.empName = empName;
      this.empId = empId;
      this.empEmail = empEmail;
    }
    getName() {
        return this.empName;
    }
    getId() {
        return this.empId;
    }
    getEmail() {
        return this.empEmail;
    }
    getRole() {
        return "Employee";
    }
  
    printInfo() {
      console.log(`Emp Name: ${this.empName}`);
      console.log(`Emp Id: ${this.empId}`);
      console.log(`Emp Email: ${this.empEmail}`);
    }
  }

  module.exports = Employee;
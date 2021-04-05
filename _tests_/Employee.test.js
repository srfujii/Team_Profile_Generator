const Employee = require('../lib/Employee');

describe("Employee constructor", () => {
    describe("Initialization", () => {

        it("Should be an object instance of the Employee Class", () => {
            expect(typeof new Employee()).toBe("object");
        })

        it("Should have empName, empId, and empEmail properties", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const newEmployee = new Employee(empName, empId, empEmail);

            expect(newEmployee.empName).toEqual(empName);
            expect(newEmployee.empId).toEqual(empId);
            expect(newEmployee.empEmail).toEqual(empEmail);
        })
    })

    describe("getName function", () => {
        it("Should retrieve the value of the empName property of an Employee instance", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const newEmployee = new Employee(empName, empId, empEmail);

            expect(newEmployee.getName()).toBe(empName);
        })
    })

    describe("getId function", () => {
        it("Should retrieve the value of the empId property of an Employee instance", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const newEmployee = new Employee(empName, empId, empEmail);

            expect(newEmployee.getId()).toBe(empId);
        })
    })

    describe("getEmail function", () => {
        it("Should retrieve the value of the empEmail property of an Employee instance", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const newEmployee = new Employee(empName, empId, empEmail);

            expect(newEmployee.getEmail()).toBe(empEmail);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the employee's role (Employee)", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const newEmployee = new Employee(empName, empId, empEmail);

            expect(newEmployee.getRole()).toBe("Employee");
        })
    })
})
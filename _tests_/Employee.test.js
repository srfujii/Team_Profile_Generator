const Employee = require('../lib/Employee');

describe("Employee constructor", () => {
    describe("Initialization", () => {

        it("can be an instance of the Employee Class", () => {
            expect(typeof new Employee()).toBe("object");

        })

        it("should have a name property", () => {
            const name = "Susan";
            const newEmployee = new Employee(id, name, email);

            expect(newEmployee.name).toBe(name);
        })
    })

    describe("getName function", () => {
        it("should retrieve the name property's value of an instance of an employee", () => {
            const name = "Susan";
            const newEmployee = new Employee(id, name, email);

            expect(newEmployee.getName()).toBe(name);
        })
    })
})
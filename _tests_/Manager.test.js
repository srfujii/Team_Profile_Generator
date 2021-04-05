const Manager = require('../lib/Manager');

describe("Manager constructor", () => {
    describe("Initialization", () => {

        it("Should be an object instance of the Manager Class", () => {
            expect(typeof new Manager()).toBe("object");
        })

        it("Should have empName, empId, empEmail, and officeNumber properties", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const officeNumber = 22;
            const newManager = new Manager(empName, empId, empEmail, officeNumber);

            expect(newManager.empName).toEqual(empName);
            expect(newManager.empId).toEqual(empId);
            expect(newManager.empEmail).toEqual(empEmail);
            expect(newManager.officeNumber).toEqual(officeNumber);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the manager's role (Manager)", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const officeNumber = 22;
            const newManager = new Manager(empName, empId, empEmail, officeNumber);

            expect(newManager.getRole()).toBe("Manager");
        })
    })

    describe("getOfficeNum function", () => {
        it("Should retrieve the manager's office number", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const officeNumber = 22;
            const newManager = new Manager(empName, empId, empEmail, officeNumber);

            expect(newManager.getOfficeNum()).toBe(officeNumber);
        })
    })
})
const Engineer = require('../lib/Engineer');

describe("Engineer constructor", () => {
    describe("Initialization", () => {

        it("Should be an object instance of the Engineer Class", () => {
            expect(typeof new Engineer()).toBe("object");
        })

        it("Should have empName, empId, empEmail, and github properties", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const github = "srfujii";
            const newEngineer = new Engineer(empName, empId, empEmail, github);

            expect(newEngineer.empName).toEqual(empName);
            expect(newEngineer.empId).toEqual(empId);
            expect(newEngineer.empEmail).toEqual(empEmail);
            expect(newEngineer.github).toEqual(github);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the engineer's role (Engineer)", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const github = "srfujii";
            const newEngineer = new Engineer(empName, empId, empEmail, github);

            expect(newEngineer.getRole()).toBe("Engineer");
        })
    })

    describe("getGitHub function", () => {
        it("Should retrieve the engineer's github profile name", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const github = "srfujii";
            const newEngineer = new Engineer(empName, empId, empEmail, github);

            expect(newEngineer.getGitHub()).toBe(github);
        })
    })
})
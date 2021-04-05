const Intern = require('../lib/Intern');

describe("Intern constructor", () => {
    describe("Initialization", () => {

        it("Should be an object instance of the Intern Class", () => {
            expect(typeof new Intern()).toBe("object");
        })

        it("Should have empName, empId, empEmail, and school properties", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const school = "Rice University";
            const newIntern = new Intern(empName, empId, empEmail, school);

            expect(newIntern.empName).toEqual(empName);
            expect(newIntern.empId).toEqual(empId);
            expect(newIntern.empEmail).toEqual(empEmail);
            expect(newIntern.school).toEqual(school);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the intern's role (Intern)", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const school = "Rice University";
            const newIntern = new Intern(empName, empId, empEmail, school);

            expect(newIntern.getRole()).toBe("Intern");
        })
    })

    describe("getSchool function", () => {
        it("Should retrieve the intern's school name", () => {
            const empName = "Susan";
            const empId = 1;
            const empEmail = "tester@test.com";
            const school = "Rice University";
            const newIntern = new Intern(empName, empId, empEmail, school);

            expect(newIntern.getSchool()).toBe(school);
        })
    })
})
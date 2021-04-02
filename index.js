// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employee1 = new Employee("john", 12345, "john@test.com");
employee1.printInfo();
const manager1 = new Manager("Bill the Manager", 89454928, "bill@text.com", 13);
manager1.printInfo();
const engineer1 = new Engineer("Joe the Engineer", 8675309, "joe@text.com", "mygithubname");
engineer1.printInfo();
const intern1 = new Intern("Mike the Intern", 49054, "mike@test.com", "University of Michigan");
intern1.printInfo();


// // Array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         name: 'username',
//         message: 'What is your GitHub username?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//     },
//     {
//         type: 'input',
//         message: `What is your project's name?`,
//         name: 'projectname',
//     },
//     {
//         type: 'input',
//         message: `Please write a short description of your project:`,
//         name: 'projectdesc',
//     },
//     {
//         type: 'list',
//         message: 'What kind of license should your project have?',
//         name: 'license',
//         choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
//     },
//     {
//         type: 'input',
//         name: 'installcommand',
//         message: 'What command should be run to install dependencies?',
//         default: 'npm i',
//     },
//     {
//         type: 'input',
//         name: 'test',
//         message: 'What command should be run to run tests?',
//         default: 'npm test',
//     },
//     {
//         type: 'input',
//         name: 'use',
//         message: 'What does the user need to know about using the repo?',
//     },
//     {
//         type: 'input',
//         name: 'contribute',
//         message: 'What does the user need to know about contributing to the repo?',
//     },
// ];

// // Function writeToFile uses built-in fs library to write the generated markdown
// // to a README.md file on the OS.
// const writeToFile = (fileName, answers) => {

//     console.log("Generating README file.....");

//     fs.writeFile(fileName, answers, (err) =>
//         err ? console.error(err) : console.log('Success!'));

// }

// // Function askQuestions uses the inquirer library to prompt the user for information
// // and stores the results. Calls generateMarkdown function to generate the README.md
// // file, then calls writeToFile function to write the generated markdown to the OS.
// const askQuestions = (questions) => {
//     inquirer
//         .prompt(questions).then((answers) => {
//             writeToFile('./README.md', generateMarkdown(answers));
//         })
//         .catch(error => {
//             if(error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//             console.log("You need to use a different terminal to access this program.");
//             } else {
//             // Something else went wrong
//             console.log("An error occurred. Please send an email to test@test.com.");
//             }
//         });
// }

// // Function call to ask our questions
// askQuestions(questions);
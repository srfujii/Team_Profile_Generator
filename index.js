// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];

// Array of question objects for user input
// Please build your team, then newline, then questions:
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: `What is the team manager's name?`,
    },
    {
        type: 'input',
        name: 'managerId',
        message: `What is the team manager's ID number?`,
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `What is the team manager's email?`,
    },
    {
        type: 'input',
        name: 'officeNum',
        message: `What is the team manager's office number?`,
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: `What is your engineer's name?`,
    },
    {
        type: 'input',
        name: 'engineerId',
        message: `What is your engineer's ID number?`,
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `What is the engineer's email?`,
    },
    {
        type: 'input',
        name: 'github',
        message: `What is your engineer's GitHub username?`,
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: `What is your intern's name?`,
    },
    {
        type: 'input',
        name: 'internId',
        message: `What is your intern's ID number?`,
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `What is the intern's email?`,
    },
    {
        type: 'input',
        name: 'school',
        message: `What is your intern's school?`,
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', `I don't want to add any more team members.`],
    },
];

// Function writeToFile uses built-in fs library to write the generated markdown
// to a team.html file on the OS.
// const writeToFile = (fileName, htmlText) => {

//     console.log("Generating README file.....");

//     fs.writeFile(fileName, answers, (err) =>
//         err ? console.error(err) : console.log('Success!'));

// }

// Function generateHTML generates and returns the HTML for the team.html file
function generateHTML() {

    console.log("Hello!!!!");
    if (employeeArray) {
        console.log("Weve got stuff" + employeeArray.length);
    } else {
        console.log(employeeArray.length);
    }
    
    for (let i=0; i<employeeArray.length; i++) {
        employeeArray[i].printInfo();
    }

//     return (`# ${projectname}
//     ## Description
//     ${projectdesc}
//   `);
}




// Function askQuestions uses the inquirer library to prompt the user for information
// and stores the results. Calls generateMarkdown function to generate the README.md
// file, then calls writeToFile function to write the generated markdown to the OS.
const askQuestions = (questions) => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // First time through, create new Team Manager Object
            if (employeeArray.length === 0) {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNum);
                employeeArray.push(manager);
                manager.printInfo();
                employeeArray[0].printInfo();
                console.log(employeeArray[0].empName);
            } 
            else //Determine whether current answers are Engineer's or Intern's and create/add appropriate object to employee array
            { 
                if (answers.github) {   // Engineer
                    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
                    employeeArray.push(engineer);
                    engineer.printInfo();
                } else if (answers.school) {    // Intern
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                    employeeArray.push(intern);
                    intern.printInfo();
                }
            }    
            // Decide which questions to ask next based on type of employee manager wants to create
            if (answers.employeeType === "Engineer") {
                askQuestions(engineerQuestions);
            } else if (answers.employeeType === "Intern") {
                askQuestions(internQuestions);
            } else {
                // No more questions, generate team.html file
                console.log("we are done.");
                generateHTML();
                // //writeToFile('./dist/team.html', generateHTML(employeeArray));
                // console.log("Employee Array: " + employeeArray);
                process.exit();
            }
        })
        .catch(error => {
            if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("You need to use a different terminal to access this program.");
            } else {
            // Something else went wrong
            console.log("An error occurred. Please send an email to test@test.com.");
            }
        });
}

const init = () => console.log("Please build your team:\n");

// Function calls to begin our app
init();
askQuestions(managerQuestions);
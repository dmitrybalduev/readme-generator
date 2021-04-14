// TODO: Include packages needed for this application
const inq = require("inquirer");
const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = ["Please enter title"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inq.
        prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            }
        ])
        .then((response) => console.log(response));
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const { repeat } = require("lodash");
let text = "";
const arrayLicense = ["Apache 2.0 License", "Boost", "BSD"];

// TODO: Create an array of questions for user input
const questions = ["Please enter title",
                   "Please enter desription",
                   "Please enter Table of Contents",
                   "Please enter Installation instructions",
                   "Please enter Usage",
                   "Please choose License",
                   "Please enter Contribution guidelines",
                   "Please enter Tests instructions",
                   "Please enter Your Gihub username",
                   "Please enter Your email address"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => 
    error ? console.error(error) : console.log("SUCCESS!"));
}

// TODO: Create a function to initialize app
function init() {
    inq.
        prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'editor',
                message: questions[2],
                name: 'content',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'usage',
            },
            {
                type: 'list',
                message: questions[5],
                choices: arrayLicense,
                name: "license"
            }
        ])
        .then((response) => {
            console.log((response));
            let arr = [response.title, response.description, response.content, response.install, response.usage, response.license];
            const lic = new generateMarkdown(arr);
 
            writeToFile("README.md", lic.output);
        });
}

// Function call to initialize app
init();


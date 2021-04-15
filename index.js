// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
const { repeat } = require("lodash");
let text = "";

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
            }
        ])
        .then((response) => {
            console.log(response);
            text = "# " +response.title +
                    "\n\n## Description\n" + response.description + 
                    "\n\n## Table of Content\n" + divideNextLine(response.content) +
                    "\n\n## Installation Instructions\n" + divideNextLine(response.install) +
                    "\n\n## Usage\n" + divideNextLine(response.usage);
 
            writeToFile("README.md", text);
        });
}

// Function call to initialize app
init();

let divideNextLine = (data) =>{
   let result = "";
   data.split("\n").forEach(element => {
        result = result + element + "<br/>";
    });
    return result;
}
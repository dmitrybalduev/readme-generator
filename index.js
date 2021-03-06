const inq = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

let text = "";
const arrayLicense = ["Apache 2.0 License", "Boost", "BSD"];

const questions = ["Please enter title",
                   "Please enter desription",
                   "Please enter Installation instructions",
                   "Please enter Usage",
                   "Please enter Contribution guidelines",
                   "Please enter Tests instructions",
                   "Please choose License",
                   "Please enter Your Gihub username",
                   "Please enter Your email address"];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => 
    error ? console.error(error) : console.log("SUCCESS!"));
}

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
                name: 'install',
            },
            {
                type: 'editor',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test',
            },
            {
                type: 'list',
                message: questions[6],
                choices: arrayLicense,
                name: "license"
            },
            {
                type: 'input',
                message: questions[7],
                name: 'githubname',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            }
        ])
        .then((response) => {
            
            let arr = [response.title, response.description, getTableContent, response.install, response.usage, response.contribution, response.test, response.license, response.githubname, response.email];
            const lic = new generateMarkdown(arr);
            
            writeToFile("READMEDEMO.md", lic.output);
        });
}

init();
let getTableContent = "[1 - Description](##Description)<br/>" +
      "[2 - Installation Instructions](##Installation-Instructions)<br/>"+
      "[3 - Usage](##Usage)<br/>" +
      "[4 - Contribution](##Contribution)<br/>" +
      "[5 - Test](##Test)<br/>" +
      "[6 - License](##License)<br/>" +
      "[7 - Questions](##Questions)<br/>";

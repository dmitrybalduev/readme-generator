// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license){
        case "Apache 2.0 License":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "Boost":
            return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        case "BSD":
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        default:
            return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
        case "Apache 2.0 License":
            return "(https://opensource.org/licenses/Apache-2.0)";
        case "Boost":
            return "(https://www.boost.org/LICENSE_1_0.txt)";
        case "BSD":
            return "(https://opensource.org/licenses/BSD-3-Clause)";
        default:
            return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // return "# " +data.title +
    // "\n\n## Description\n" + data.description + 
    // "\n\n## Table of Content\n" + divideNextLine(data.content) +
    // "\n\n## Installation Instructions\n" + divideNextLine(data.install) +
    // "\n\n## Usage\n" + divideNextLine(data.usage) + 
    // "\n\n## License\n" + renderLicenseBadge(data.license);
    console.log(data);
    this.output =  "# " +data[0] +
    "\n\n## Description\n" + data[1] + 
    "\n\n## Table of Content\n" + divideNextLine(data[2]) +
    "\n\n## Installation Instructions\n" + divideNextLine(data[3]) +
    "\n\n## Usage\n" + divideNextLine(data[4]) + 
    "\n\n## License\n" + "\n" + data[5] + "\n\n" + renderLicenseBadge(data[5]); 
    // + "\n[Click here to view License]" + renderLicenseLink(data[5]);

}

let divideNextLine = (data) =>{
    let result = "";
    data.split("\n").forEach(element => {
         result = result + element + "<br/>";
     });
     return result;
 }

module.exports = generateMarkdown;

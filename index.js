const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);



function askQuestions () {
    // array of questions for user
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Please enter the title of your project:"
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter any installation instructions for your project:"
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter the usage information for your project:"
        },
        {
            type: "input",
            name: "contribution",
            message: "Please enter the contribution guidelines for your project:"
        },
        {
            type: "input",
            name: "test",
            message: "Please enter the test instructions for your project:"
        },
        {
            type: "checkbox",
            name: "licenses",
            message: "Please select any license for your project:",
            choices: [
                {name: "Apache 2", value: "Apache 2"},
                {name: "MIT", value: "MIT"},
                {name: "GPL", value: "GPL"}
            ]
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address:"
        }
    ]);


};

//Function that creates what will be added to the new readme file
function generateReadme(answers) {

    if (answers.licenses[0] === "Apache 2") {
        var licenseBadge = "![Apache 2](https://img.shields.io/badge/license-Apache%202-blue)";
    } else if (answers.licenses[0] === "MIT") {
        var licenseBadge = "![MIT](https://img.shields.io/badge/license-MIT-green)";
    } else if (answers.licenses[0] === "GPL") {
        var licenseBadge = "![GPL](https://img.shields.io/badge/license-GPL-blue)";
    } else {
        var licenseBadge = "";
    }


    return `
# ${answers.title}

${licenseBadge}
![](https://img.shields.io/badge/-Bootcamp-blue)

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application uses the ${answers.licenses} license.

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
More info about this application can be found at <https://github.com/${answers.username}>.     
If you have any questions you can email <${answers.email}>.
    `;
};
    

// function to write README file
function writeToFile(fileName, data) {
};

// function to initialize program
async function init() {
    const answers = await askQuestions();

    const readme = generateReadme(answers);

    await writeFileAsync("README.md", readme);

};

// function call to initialize program
init();

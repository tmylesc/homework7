const inquirer = require("inquirer");
const fs = require("fs");


// array of questions for user
const questions = [
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
        message: "Please select any licenses for your project:",
        choices: [
            {name: "Apache 2"},
            {name: "MIT"},
            {name: "GPL"}
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
];

// function to write README file
function writeToFile(fileName, data) {
};

// function to initialize program
function init() {
    return inquirer.prompt(questions);

};

// function call to initialize program
init();

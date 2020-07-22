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
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

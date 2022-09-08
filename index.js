// Global variables
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions array
inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter the title of your project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose the appropriate license for your project.',
        name: 'license',
        choices: [
            { value: 'MIT' },
            { value: 'Apache License 2.0' },
            { value: 'Mozilla Public License 2.0' },
            { value: 'General Public License (GPLv3' },
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to your project.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide tests for project, and explain how to test.',
        name: 'tests',
    },
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    }

])
    .then((data) => {
        fs.writeFile(`README.md`, generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log("Success, your README has been created!"))
    })

function init() {
 }

init();
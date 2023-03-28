// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        message: 'What is the title of your ReadME?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please proide a description of your application.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide any instructions for installation of your application.',
        name: 'installation',
    },
    {
        type: 'list',
        message: 'What license will you be using?',
        choices: ['MIT', 'Apache', 'Creative Commons', 'BSD-3', 'No license'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please provide information about the useage of your application.',
        name: 'useage',
    },
    {   type: 'input',
        message: 'Please list any collaborators, or provide any other credit here.',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please provide any testing info.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please provide your Github username.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please provide your e-mail address.',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('README successfully created!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();

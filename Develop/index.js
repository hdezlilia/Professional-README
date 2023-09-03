// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {Console} = require('console');
const generateMarkDown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide description of project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'installation instructions for project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'license information',
        choices: ['MIT', 'GPLv3', 'Boost4 Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'list any contributers to project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'testing instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'provide github username:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err): console.log('wrote stuff into' + fileName)
    );
}
 
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const README = generateMarkDown (answers);
        writeToFile('README.md', README);
    });
}

// Function call to initialize app
init();

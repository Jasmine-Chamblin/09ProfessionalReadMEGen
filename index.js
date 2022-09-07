// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')
// TODO: Create an array of questions for user input

inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'What is your README Title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your README description?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'What are your installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are your application instructions?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Did anyone else contribute to your work?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'what are your application testing instructions?',
      },


])
.then(function(answers) {
    console.log(answers)

}


)

;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

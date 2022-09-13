// TODO: Include packages needed for this application
const inquirer = import ('inquirer');
const fs = import ('fs');



const generateHTML = ({ title, description, instructions, usage, contribution }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">README ${title}</h1>
    <p class="lead"> ${description}.</p>
    <h3>Installation Instructions</h3>
    <p class="lead"> ${instructions}.</p>
    <h3>Application Instructions</h3>
    <p class="lead"> ${usage}.</p>
    <h3>Application Contributions</h3>
    <p class="lead"> ${contribution}.</p>
  </div>
</div>
</body>
</html>`;

// TODO: Create an array of questions for user input


inquirer
.prompt([

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
.then((answers) => {
    const readMeContent = generateHTML(answers);

   fs.writeFile('index.html', readMeContent, (err) =>
   err ? console.log(err) : console.log('Successfully created README!')
   );
});

// questions ()
// TODO: Create a function to write README file
// function createReadMe(answers) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
//init();

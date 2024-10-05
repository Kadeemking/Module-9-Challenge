// TODO: Include packages needed for this application
const fs= require("fs")
const inquirer= require("inquirer")
const generateMarkdown= require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message:("What is your GitHub username?"),
        name: 'username',
    },
    {
        type: 'input',
        message:("What is your email address?"),
        name: 'email',
    },
    {
        type: 'input',
        message:("What is your project's name?"),
        name: 'title',
    },
    {
        type: 'input',
        message:("Please write a short description of your project."),
        name: 'description',
    },
    {
        type: 'list',
        message: ("What kind of license should your project have?"),
        name: 'license',
        choices: ["MIT", "ISC", "Mozilla", "IBM", "Apache", "Eclipse"],
    },
    {
        type: 'input',
        message:("What command should be run to install dependencies?"),
        name: 'installtion',
    },
    {
        type: 'input',
        message:("How can the user run test?"),
        name: 'test',
    },
    {
        type: 'input',
        message:("How does the user use this repo?"),
        name: 'usage',
    },
    {
        type: 'input',
        message:("How can the user contribute to this repo?"),
        name: 'contribute',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content= generateMarkdown(data)
    fs.writeFile(fileName, content, (err) => err ? console.error(err) : console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        writeToFile("./output/README.md", data)
    })
}

// Function call to initialize app
init();

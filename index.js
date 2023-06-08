const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// Questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?:",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide instructions for installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Provide guidelines for contribution:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide instructions for testing:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// prompt function
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// README write file function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) throw error;
    console.log(`${fileName} has been generated`);
  });
}

// run application
init();

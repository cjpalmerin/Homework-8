// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

const fs = require("fs");
const inquirer = require("inquirer");

function promptUserInput() {
    return inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "title",
        message: "What is the Title of the project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please give a description for your project."
      },
      {
        type: "input",   //do a split function here in between the spaces and find a way to put them on separate lines
        name: "tableOfContents", 
        message: "Please provide Table of Contents."
      },
      {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? "
      },
      {
        type: "input",
        name: "usage",
        message: "What are the instructions for usage?"
      },
      {
        type: "input",
        name: "license",
        message: "What is the licensing?"
      },
      {
        type: "input",
        name: "contributing",
        message: "Guidelines for contributors?"
      },
      {
        type: "input",
        name: "tests", 
        message: "Are there any test and examples on how to run them?"
      },
      {
        type: "input",
        name: "profilePicture",
        message: "Please provide URL to your github profile picture."
      },
      {
        type: "input",
        name: "email",
        message: "What is your github user email?"
      },
    ]);
  }

  function readMeGenerator(userInput) {
    return `
    # ${userInput.title}

    ## Description

    ${userInput.description}

    ### Table of Contents

    ${userInput.tableOfContents}

    ### Installation

    ${userInput.installation}

    ## Usage

    ${userInput.usage}

    ### License

    ${userInput.license}

    ### Contributing

    ${userInput.contributing}

    ### Running the Tests

    ${userInput.tests}

    ### Questions
    ![GitHub Profile Picture](${profilePicture})
    ### ${username}
    ### ${email}
    `
  }
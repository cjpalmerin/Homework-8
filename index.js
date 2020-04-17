const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util")

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
    //   {
    //     type: "input",   //do a split function here in between the spaces and find a way to put them on separate lines
    //     name: "tableOfContents", 
    //     message: "Please provide Table of Contents."
    //   },
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
        message: "What is the licensing? (ie. MIT, Apache, lgpl_2_1)"
      },
      {
        // type: "input",
        // name: "license-color",
        // message: "What color do you want for the badge?"
        type: 'list',
        message: "What color do you want for the badge?",
        name: "color",
        choices: [,"green", "blue"],
        // choices: ["brightgreen", "green", "yellowgreen", "yellow", "orange", "red", "blue", "lightgrey", "blueviolet", "ff69bf", "9cf"],
        placeholder: "blue",
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

[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

### Installation

${userInput.installation}

## Usage

${userInput.usage}

### License

![License badge](https://img.shields.io/badge/license-${userInput.license}-${userInput.color})

### Contributing

${userInput.contributing}

### Tests

${userInput.tests}

### Questions
![GitHub Profile Picture](${userInput.profilePicture})
### ${userInput.username}
### ${userInput.email}
`
  }

const writeFileAsync = util.promisify(fs.writeFile);

promptUserInput()
  .then(function(userInput) {
    const readMe = readMeGenerator(userInput);

    return writeFileAsync("README.md", readMe);
    // return writeFileAsync("README.md", JSON.stringify(readMe, null, 2));
  })
  .then(function() {
    console.log("Success!");
  })
  .catch(function(error) {
    console.log(error);
  });

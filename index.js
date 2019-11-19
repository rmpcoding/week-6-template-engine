const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./Develop/lib/Employee");
const generator = require("./Develop/literals/generator");

var prompt = inquirer
  .prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your manager's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your manager's office number?",
      name: "office"
    },
    {
      type: "list",
      message: "What is your title?",
      choices: ["Engineer", "Intern", "Terminate"],
      name: "title"
    }
  ])
  .then(function(response) {
    const { name, id, email, office, title } = response;

    // const emp1 = new Employee(name, id, email);

    if (title === "Engineer") {
      engineerPrompt()
    } else if (title === "Intern") {
      internPrompt();
    } else if (title === "Terminate") {
      //create function to run application.
    }
  });

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your github username?",
        name: "github"
      }
    ])
    .then(function(response) {
      const { github } = response;
      generator();
    });
}

function internPrompt() {
  inquirer
    .prompt([
      {
        name: "name"
      },
      {
        type: "input",
        message: "What is your manager's ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your school name?",
        name: "school"
      }
    ])
    .then(function(response) {
      const { school } = response;
    });
}


// running application
// create four html template literal generators;


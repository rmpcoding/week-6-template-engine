const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./Develop/lib/Employee");
const generator = require("./Develop/literals/generator");
const generatorManager = require("./Develop/literals/generator");
const generatorEngineer = require("./Develop/literals/generator");
const generatorIntern = require("./Develop/literals/generator");

let manager;
const engineerArray = [];
const internArray = [];

// First message to show
console.log("Please select responses for your team");

// Commence cli application via inquirer
var mainPrompt = inquirer
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
      message: "What is your manager's id?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your manager's office number?",
      name: "office"
    }
  ])
  .then(function(response) {
    // console.log(response);
    manager = response;
    titlePrompt(); //calls titlePrompt function
  });

let title;

// what is your title prompt
function titlePrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is your title?",
        choices: ["Engineer", "Intern", "Terminate"],
        name: "title"
      }
    ])
    .then(function(response) {
      title = response.title; //then destructures title. Do I need this?

      if (title === "Engineer") {
        engineerPrompt(title); //probably don't need title as a parameter
      } else if (title === "Intern") {
        internPrompt(title);
      } else if (title === "Terminate") {
        console.log(generator());
        generator();
        // fs.appendFile("test1.html", JSON.stringify(response), err => {
        //   if (err) console.log(err);
        //   console.log("Successfully written to file.");
        // });
      }
    });
}

function engineerPrompt(title) {
  inquirer
    .prompt([
      {
        type: "input",
        message: `What is the ${title}'s name?`,
        name: "name"
      },
      {
        type: "input",
        message: `What is the ${title}'s id?`,
        name: "id"
      },
      {
        type: "input",
        message: `What is the ${title}'s email?`,
        name: "email"
      },
      {
        type: "input",
        message: `What is the ${title}'s github username?`,
        name: "github"
      }
    ])
    .then(function(response) {
      engineerArray.push(response);
      titlePrompt();
    });
}

function internPrompt(title) {
  inquirer
    .prompt([
      {
        type: "input",
        message: `What is the ${title}'s name?`,
        name: "name"
      },
      {
        type: "input",
        message: `What is the ${title}'s id?`,
        name: "id"
      },
      {
        type: "input",
        message: `What is the ${title}'s email?`,
        name: "email"
      },
      {
        type: "input",
        message: `Where does the ${title} go to school?`,
        name: "school"
      }
    ])
    .then(function(response) {
      internArray.push(response);
      titlePrompt();
    });
}

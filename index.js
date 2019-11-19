const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./Develop/lib/Employee");
const generator = require("./Develop/literals/generator");
const generatorManager = require ("./Develop/literals/generator")

let managers;
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
    managers = response;
    console.log(managers)
    // generator(manager);
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
      // console.log(response); //this response is passing through ONLY the titlePrompt response, title.
       title = response.title; //then destructures title. Do I need this?
       console.log(title);
       

      if (title === "Engineer") {
        engineerPrompt(JSON.stringify(response.title));
      } else if (title === "Intern") {
        internPrompt(JSON.stringify(response.title));
      } else if (title === "Terminate") {




  generator();
  fs.appendFile("test1.html", JSON.stringify(response), err => {
    if (err) console.log(err);
    console.log("Successfully written to file.");
  });




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
        message: `What is the ${title}'s github username?`,
        name: "github"
      }
    ])
    .then(function(response) {
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
        message: `Where does the ${title} go to school?`,
        name: "school"
      }
    ])
    .then(function(response) {
      titlePrompt();
    });
}

// .then(function(response) {
//   console.log(response);
//   const { github } = response;
//   generator();
//   fs.appendFile("test1.html", JSON.stringify(response), err => {
//     if (err) console.log(err);
//     console.log("Successfully written to file.");
//   });
// });




// Unusuable.
    //   if (title === "Intern") {
    //   internPrompt();
    // }
    // else if (title === "Terminate") {
    // }


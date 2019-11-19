const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./Develop/lib/Employee");
const generator = require("./Develop/literals/generator");

console.log("Please select responses for your team");

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
    }
  ])
  .then(function(response) {
    const { name, id, email, office } = response;
    titlePrompt();

    //   if (title === "Intern") {
    //   internPrompt();
    // } 
    // else if (title === "Terminate") {
    // }
  });

  // what is your title prompt
function titlePrompt() {
  inquirer.prompt([
  {
    type: "list",
    message: "What is your title?",
    choices: ["Engineer", "Intern", "Terminate"],
    name: "title"
  }
]).then(function (response) {
  const {title} = response;
  if (title === "Engineer") {
    engineerPrompt(JSON.stringify(response.title));
  }
})
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
    ]).then(function (response) {
      titlePrompt();
    })
}

function internPrompt() {
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
      const { school } = response;
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
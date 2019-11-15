var fs = require("fs");
var inquirer = require("inquirer");
var jest = require("jest");
var Employee = require("./Develop/lib/Employee");


var prompt = inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email"
    },
    {
      type: "list",
      message: "What is your title?",
      choices: ["Engineer", "Intern", "Manager"],
      name: "title"
    }
  ])
  .then(function(response) {
    const { name, id, email, title } = response;

    const emp1 = new Employee(name, id, email);

    if (title === "Engineer") {

    };
  });



  function engineerPrompt() {
    inquirer
  .prompt([
    {
      type: "input",
      message: "What is your github username?",
      name: "github"
    }
  ]).then(function(response) {
    const {github} = response;
  })
}


function internPrompt() {
  inquirer
.prompt([
  {
    type: "input",
    message: "What is your school name?",
    name: "school"
  }
]).then(function(response) {
  const {school} = response;
})
}

function managerPrompt() {
  inquirer
.prompt([
  {
    type: "input",
    message: "What is your office number?",
    name: "office"
  }
]).then(function(response) {
  const {office} = response;
})
}
var fs = require("fs");
var inquirer = require("inquirer");
var jest = require("jest");


var prompt = inquirer.prompt([
  {
    type: "input",
    message: "What is your name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your ID? Hint: enter 4 digits.",
    name: "id",
  },
  {
    type: "input",
    message: "What is your title?",
    name: "title",
  }
])


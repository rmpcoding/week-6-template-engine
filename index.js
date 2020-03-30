const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./Develop/lib/Employee');
const generator = require('./Develop/literals/generator');


// let engineerArray = [];
let internArray = [];

let htmlTemplate = generator.generator();

// Commence cli application via inquirer
// ============================================================
var mainPrompt = inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your manager's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is your manager's id?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is your manager's office number?",
            name: 'office'
        }
    ])
    .then(function(response) {
        titlePrompt(response);
    });

function titlePrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What is your title?',
                choices: ['Engineer', 'Intern', 'Finished!'],
                name: 'title'
            }
        ])
        .then(function(response) {
            title = response.title;

            if (title === 'Engineer') {
                engineerPrompt(title);
            } else if (title === 'Intern') {
                internPrompt(title);
            } else if (title === 'Finished!') {

                fs.writeFile('test1.html', htmlTemplate, err => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Successfully written to file.');
                    }
                });
            }
        });
}

function engineerPrompt(title) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the ${title}'s name?`,
                name: 'name'
            },
            {
                type: 'input',
                message: `What is the ${title}'s id?`,
                name: 'id'
            },
            {
                type: 'input',
                message: `What is the ${title}'s email?`,
                name: 'email'
            },
            {
                type: 'input',
                message: `What is the ${title}'s github username?`,
                name: 'github'
            }
        ])
        .then(function(response) {
            let engineerArray = [];
            engineerArray = engineerArray.push(response);

            console.log('ABOVE CONSOLE LOG OF RESPONSE');
            console.log(response);
            console.log('ABOVE CONSOLE LOG OF ENGINEER ARRAY');
            console.log(engineerArray);
            console.log('BELOW CONSOLE LOG OF ENGINEER ARRAY');
            titlePrompt();
        });
}

function internPrompt(title) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the ${title}'s name?`,
                name: 'name'
            },
            {
                type: 'input',
                message: `What is the ${title}'s id?`,
                name: 'id'
            },
            {
                type: 'input',
                message: `What is the ${title}'s email?`,
                name: 'email'
            },
            {
                type: 'input',
                message: `Where does the ${title} go to school?`,
                name: 'school'
            }
        ])
        .then(function(response) {
            internArray = internArray.push(response);
            console.log(internArray);
            titlePrompt();
        });
}


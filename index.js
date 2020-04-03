const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./Develop/lib/Employee');
const generator = require('./Develop/literals/generator');


// let engineerArray = [];
let internArray = [];

// let htmlTemplate = generator.generator();

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
    .then(function(managerResponse) {
        titlePrompt(managerResponse);
    });

function titlePrompt(managerResponse) {
    console.log(managerResponse)
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
            console.log(response)

            if (title === 'Engineer') {
                console.log(managerResponse)
                console.log(response)
                engineerPrompt(title);
            } 
            if (title === 'Intern') {
                console.log(managerResponse)
                internPrompt(title);
            } 
            if (title === 'Finished!') {
                console.log(managerResponse)
                managerResponse = JSON.stringify(managerResponse)

                fs.writeFile('index.html', generator.generator(managerResponse), err => {
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


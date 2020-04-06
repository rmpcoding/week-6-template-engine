const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./Develop/lib/Employee');
const generator = require('./Develop/literals/generator');

// let engineerArray = [];
let internArray = [];
let managerResponse;

// let htmlTemplate = generator.generator();

// Commence cli application via inquirer
// ============================================================
var mainPrompt = inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your manager's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is your manager's id?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your manager's office number?",
            name: 'office',
        },
    ])
    .then(function (response) {
        managerResponse = response;
        return titlePrompt(managerResponse);
        // return managerResponse;
    });

function titlePrompt(response) {
    console.log(response)
    console.log(managerResponse)
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What is your title?',
                choices: ['Engineer', 'Intern', 'Finished!'],
                name: 'title',
            },
        ])
        .then(function (response) {
            title = response.title;

            if (title === 'Engineer') {
                engineerPrompt(title);
            }
            if (title === 'Intern') {
                internPrompt(title);
            }
            if (title === 'Finished!') {
                console.log(response + 'on line 61')
                response = JSON.stringify(managerResponse);
                console.log(response + 'on line 63')

                fs.writeFile(
                    'index.html',
                    generator.generator(response),
                    (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Successfully written to file.');
                        }
                    }
                );
            }
        });
}

function engineerPrompt(title) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the ${title}'s name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: `What is the ${title}'s id?`,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is the ${title}'s email?`,
                name: 'email',
            },
            {
                type: 'input',
                message: `What is the ${title}'s github username?`,
                name: 'github',
            },
        ])
        .then(function (response) {
            let engineerArray = [];
            engineerArray = engineerArray.push(response);
            titlePrompt();
        });
}

function internPrompt(title) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the ${title}'s name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: `What is the ${title}'s id?`,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is the ${title}'s email?`,
                name: 'email',
            },
            {
                type: 'input',
                message: `Where does the ${title} go to school?`,
                name: 'school',
            },
        ])
        .then(function (response) {
            internArray = internArray.push(response);
            titlePrompt();
        });
}

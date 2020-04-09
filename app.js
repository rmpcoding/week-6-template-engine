const fs = require('fs');
const inquirer = require('inquirer');
const generator = require('./Develop/literals/generator');

let managerResponse;
let engineerResponse;
let internResponse;

let engineerArr = [];
let internArr = [];

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
        titlePrompt(managerResponse);
    });

function titlePrompt(response) {
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
                managerResponse = JSON.stringify(managerResponse);
                engineerArr = JSON.stringify(engineerArr);
                internArr = JSON.stringify(internArr);

                fs.writeFile(
                    'index.html',
                    generator.generator(
                        managerResponse,
                        engineerArr,
                        internArr
                    ),
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
            engineerResponse = response;
            engineerArr.push(engineerResponse)
            console.log(engineerArr)
            titlePrompt();
            return engineerResponse;
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
            internResponse = response;
            internArr.push(internResponse)
            titlePrompt();
            return internResponse;
        });
}

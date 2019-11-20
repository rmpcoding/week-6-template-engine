const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const generator = (response) => {
  console.log("hi");
  var header = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Template</title>
  </head>
    <body>
  <style>
  .jumbotron {
    background-color: rgb(199, 101, 101);
  }

  .card {
    margin: auto;
  }

  .card-body {
    background-color: royalblue;
  }
</style>

<div class="jumbotron">
<h1 class="display-4 text-center">My Team</h1>
</div>
<hr class="my-4">
${generatorManager(manager)}
${generatorEngineer(engineerArray)}
${generatorIntern(internArray)}`;
}

const generatorManager = (managerParameter) => {
  var managerCard = `<main>
  <!-- cards -->
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${managerParameter.name}</h5>
            <br>
            <h6 class="card-subtitle mb-2">Manager</h6>
          </div>
        </div>

  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">${managerParameter.office}</li>
            <li class="list-group-item">${managerParameter.id}</li>
            <li class="list-group-item">${managerParameter.email}</li>
          </ul>
        </div>
    </main>`;
  return managerCard;
}

const generatorEngineer = (engineerParameter) => {
  console.log(engineerParameter);
  var engineerCard = `<main>
  <!-- cards -->
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${engineerParameter.name}</h5>
            <br>
            <h6 class="card-subtitle mb-2">Engineer</h6>
          </div>
        </div>

  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">${engineerParameter.id}</li>
            <li class="list-group-item">${engineerParameter.email}</li>
            <li class="list-group-item">${engineerParameter.github}</li>
          </ul>
        </div>
    </main>`;
  return engineerCard;
}

const generatorIntern = (internParameter) => {
  var internCard = `<main>
  <!-- cards -->
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${internParameter}</h5>
            <br>
            <h6 class="card-subtitle mb-2">Intern</h6>
          </div>
        </div>

  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">${internParameter}</li>
            <li class="list-group-item">${internParameter}</li>
            <li class="list-group-item">${internParameter}</li>
          </ul>
        </div>
    </main>`;
  return internCard;
}

// module.exports.generator = generator.generator;
// module.exports.generatorManager = generatorManager;

module.exports = {
  generator: generator,
  generatorManager: generatorManager,
  generatorEngineer:generatorEngineer,
  generatorIntern: generatorIntern
}
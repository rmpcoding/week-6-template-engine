const generator = (managerResponse, engineerResponse, internResponse) => {
    managerResponse = JSON.parse(managerResponse);
    engineerResponse = JSON.parse(engineerResponse);
    internResponse = JSON.parse(internResponse);

    let htmlTemplate = `<!DOCTYPE html>
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

${generatorManager(managerResponse)}
${generatorEngineer(engineerResponse)}
${generatorIntern(internResponse)}`;
    return htmlTemplate;
};

const generatorManager = (response) => {
    let managerCard = `<main>
<!-- cards -->
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${response.name}</h5>
            <br>
            <h6 class="card-subtitle mb-2">Manager</h6>
          </div>
        </div>

  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">ID: ${response.id}</li>
            <li class="list-group-item">Email: ${response.email}</li>
            <li class="list-group-item">Office: ${response.office}</li>
          </ul>
        </div>
    </main>`;
    return managerCard;
};

const generatorEngineer = (response) => {
    console.log(response);
    let engineerCard = `<main>
  <!-- cards -->
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${response.name}</h5>
            <br>
            <h6 class="card-subtitle mb-2">Engineer</h6>
          </div>
        </div>

  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">${response.id}</li>
            <li class="list-group-item">${response.email}</li>
            <li class="list-group-item">${response.github}</li>
          </ul>
        </div>
    </main>`;
    return engineerCard;
};

const generatorIntern = (response) => {
    console.log(response);
    let internCard = `<main>
  <!-- cards -->
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${response.name}</h5>
            <br>
            <h6 class="card-subtitle mb-2">Intern</h6>
          </div>
        </div>

  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">${response.id}</li>
            <li class="list-group-item">${response.email}</li>
            <li class="list-group-item">${response.school}</li>
          </ul>
        </div>
    </main>`;
    return internCard;
};

module.exports = {
    generator: generator
};

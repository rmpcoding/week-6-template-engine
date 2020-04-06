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
    <div class="container-fluid">
  <style>
  .jumbotron {
    background-color: #fad390;
  }

  .card {
    margin: auto;
  }

  .card-body {
    background-color: #6a89cc;
  }
</style>

<div class="jumbotron">
<h1 class="display-4 text-center">Team Profile!</h1>
</div>
<hr class="my-4">

${generatorManager(managerResponse)}
${generatorEngineer(engineerResponse)}
${generatorIntern(internResponse)}
</div>
</body>
</html>`;
    return htmlTemplate;
};

const generatorManager = (response) => {
    let managerCard = `
<!-- cards -->
  <div class="row">
    <div class="col-sm-4">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title">${response.name}</h4>
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
      </div>`;
    return managerCard;
};

const generatorEngineer = (response) => {
    console.log(response);
    let engineerCard = `<!-- cards -->
    <div class="col-sm-4">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title">${response.name}</h4>
            <br>
            <h6 class="card-subtitle mb-2">Engineer</h6>
          </div>
        </div>

  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">ID: ${response.id}</li>
            <li class="list-group-item">Email: ${response.email}</li>
            <li class="list-group-item">GitHub: ${response.github}</li>
          </ul>
        </div>
      </div>`;
    return engineerCard;
};

const generatorIntern = (response) => {
    console.log(response);
    let internCard = `<!-- cards -->
      <div class="col-sm-4">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4 class="card-title">${response.name}</h4>
            <br>
            <h6 class="card-subtitle mb-2">Intern</h6>
          </div>
        </div>

  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">ID: ${response.id}</li>
            <li class="list-group-item">Email: ${response.email}</li>
            <li class="list-group-item">School: ${response.school}</li>
          </ul>
        </div>
      </div>`;
    return internCard;
};

module.exports = {
    generator: generator,
};

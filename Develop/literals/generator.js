const generator = (managerResponse, engineerResponse, internResponse) => {
    managerResponse = JSON.parse(managerResponse);

    engineerResponse
        ? (engineerResponse = JSON.parse(engineerResponse))
        : console.log('No engineers selected');

    internResponse
        ? (internResponse = JSON.parse(internResponse))
        : console.log('No interns selected.');

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
${internResponse ? generatorIntern(internResponse) : notSelected()}
</div>
</body>
</html>`;
    return htmlTemplate;
};

const generatorManager = (response) => {
    return managerCard = `
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
};

const generatorEngineer = (response) => {
    return response.map(element => {
        return `<!-- cards -->
      <div class="col-sm-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">${element.name}</h4>
              <br>
              <h6 class="card-subtitle mb-2">Engineer</h6>
            </div>
          </div>
          
    <!-- lists -->
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush text-center">
              <li class="list-group-item">ID: ${element.id}</li>
              <li class="list-group-item">Email: ${element.email}</li>
              <li class="list-group-item">GitHub: ${element.github}</li>
            </ul>
          </div>
        </div>`;
    });

};

const generatorIntern = (response) => {
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

const notSelected = () => {
    return '';
};

module.exports = {
    generator: generator,
};

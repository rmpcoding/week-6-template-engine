


function generator(response, name, id, email, title, github) {
  // console.log("Hey, you're in another console brah");
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Template</title>
  </head>
  <body>
    <div class="jumbotron">
        <h1 class="display-4 text-center">My Team</h1>
      </div>
      <hr class="my-4">
  
    <main>
  <!-- cards -->
      <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">\\${name}\\</h5>
            <br>
            <h6 class="card-subtitle mb-2">\\${title}\\</h6>
          </div>
        </div>
  
  <!-- lists -->
      <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">\\${github}\\</li>
            <li class="list-group-item">\\${id}\\</li>
            <li class="list-group-item">\\${email}\\</li>
          </ul>
        </div>
    </main>
  
  
  
  
  
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
  </body>
  </html>`
}




module.exports = generator;



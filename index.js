const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  let responseMessage = "";
  let urlGiven = request.url.split('/');
  switch (urlGiven[1]) {
    case "":
      responseMessage = "Bienvenue sur votre serveur !!";
      break;

    case "contact":
      responseMessage = "Nous ne sommes pas joignables pour le moment ! ";
      break;

    case "display":
      responseMessage = "Vous tentez d'afficher le profil de " + urlGiven[2];
      break;

    default:
      break;
  }
  response.end(responseMessage);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`server is listening on ${port}`);
});
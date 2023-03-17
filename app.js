const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");

  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  app.use(cors());

  next();
});

const estadosCidades = require("./modulo/teste.js");

app.get("/estados", cors(), async function (request, response, next) {
  //chama a função que retorna os estados
  let listaDeEstados = estadosCidades.getListaDeEstados();
  if (listaDeEstados) {
    //retorna o json e o status code
    response.json(listaDeEstados);
    response.status(200);
  } else {
    response.status(500);
  }
});
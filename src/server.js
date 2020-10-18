//importando Depedencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//iniciando o express
const server = express();

server
  //utilizar body da requisição (req)
  .use(express.urlencoded({extend: true}))

  //utilizando arquivos estaticos
  .use(express.static("public"))

  //configurar template engine
  .set("views", path.join(__dirname, "views"))

  .set("view engine", "hbs")

  ///rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanages", pages.saveOrphanage);

//Ligando o servidor na porta 5500
server.listen(5500, () => {
  console.log("Sever started");
});

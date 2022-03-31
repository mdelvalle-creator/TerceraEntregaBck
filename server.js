const express = require("express");
const Contenedor = require('./Contenedor');
const app = express();

const container = new Contenedor(`${__dirname}/productos.txt`);

// Get all products
app.get("/productos", async (request, response) => {
  const results = await container.getAll();
  response.json(results);
});

// Get a random product
app.get("/productoRandom", async (request, response) => {
  const results = await container.getAll();
  const index = Math.floor(Math.random() * results.length);
  response.json(results[index]);
});

const listener = app.listen(8080, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

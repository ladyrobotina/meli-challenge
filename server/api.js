const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());
app.get("/api/search", (req, res) => {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    .then((response) => response.json())
    .then((data) => res.send(data.results));
});

app.get("/api/items/:id", (req, res) => {
  fetch(`https://api.mercadolibre.com/items/${req.params.id}`)
    .then((response) => response.json())
    .then((data) => res.send(data));
});

app.listen(3001, () => {
    console.log("Hola Vale, lograste hacer el challenge")
});
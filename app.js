const express = require("express");
const app = express();

const home = app.get("/", (request, response) => {
  response.send("Home Page");
});

module.exports = home;

const about = app.get("/about", (request, response) => {
  response.send("About Page");
});

module.exports = about;

app.listen(3000);

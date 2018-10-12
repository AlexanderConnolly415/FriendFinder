// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up Express application to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Starts server to listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Requires and sets HTML routes in file
require('./app/routing/htmlRoutes.js')(app);

// Requires and sets API routes in file
require('./app/routing/apiRoutes.js')(app);
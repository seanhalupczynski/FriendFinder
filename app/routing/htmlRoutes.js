// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

// express setup
var app = express();
var PORT = process.env.PORT || 8080;

// HTML Routes
// Home
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

// Survey
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});
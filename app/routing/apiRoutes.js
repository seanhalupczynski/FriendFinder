// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

// express setup
var app = express();
var PORT = process.env.PORT || 8080;

// Data Routes
// get all possible friends
app.get("/api/friends", function(req, res){
    return res.json(friends);
});

// add new friend data
app.post("/api/friends", function(req, res){
    // new friend variable
    var newFriend = req.body;

    // removing spaces from new friends object
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    // pushing the new friend to friends array
    friends.push(newFriend);
    // new friend json
    res.json(newFriend);
});


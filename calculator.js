//jshint esversion:6

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express()

//app config for css
app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({extended:true}));    //special function we use whenever we try to pass data from an html form

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html"); //helps server find file location
})

app.post("/", function(req,res){
    res.send("test")
})


app.listen(3000, function(){
    console.log("server started on port 3000");
})




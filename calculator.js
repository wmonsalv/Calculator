//jshint esversion:6

const express = require("express");
const path = require("path");

const app = express()

//app config for css
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html"); //helps server find file location
    console.log(__dirname)
})


app.listen(3000, function(){
    console.log("server started on port 3000");
})




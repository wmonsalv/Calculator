//jshint esversion:6

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express()

//app config for css
app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({extended:true}));    //special function we need to use whenever we try to pass data from an html form

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html"); //helps server find file location
})

app.post("/", function(req,res){  //what we gather from body parser is passed as text, so we have to convert our data type to int if we wish to run some kind of mathematical op.
    let num1 = parseInt(req.body.num1); //num1 and num2 were the names I assigned to the name attributes on the input form
    let num2 = parseInt(req.body.num2);
    let result = mod(num1, num2);
    res.send("The result of the calculation is " + result); //only for testing purposes!!!!
})

    function mod(n, m) {
    let remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
    };


app.listen(3000, function(){
    console.log("server started on port 3000");
})




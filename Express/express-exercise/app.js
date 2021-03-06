var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi, there. Welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "oink",
        dog:"woof woof",
        cow:"moo",
        cat:"meow",
        goldfish:"..."
    }
    var animal=req.params.animal.toLowerCase();
    var sound=sounds[animal];
    res.send("The "+animal+" says "+sound+".");
});

app.get("/repeat/:word/:num", function(req,res){
    var word = req.params.word;
    var num= Number(req.params.num);
    var result="";

    for(var i =0; i<num;i++){
        result+=word + " ";
    }
    res.send(result);
});

app.get("*", function(req,res){
    res.send("Sorry page not found... What are you doing with your life!");
});

app.listen(3000, '127.0.0.1', function(){
    console.log("Server has started");
});
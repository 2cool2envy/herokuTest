
var http = require("http");

var express = require('express');
var app = express();





// This responds with "Hello World" on the homepage
app.get('/', function (req, res, next) {
   console.log("Got a GET request for the homepage");
   
   var data = [
   {"name":"James Bond1111"}
   ];
    res.json(data);
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   var data = [
   {"name":"James Bond from postoffice"}
   ];
    res.json(data);
   
})
 

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
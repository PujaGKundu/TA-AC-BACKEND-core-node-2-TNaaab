//relative path of index.js
console.log("./index.html");

//absolute path of index.js
var path = require("path");
var filePath = path.join(__dirname + "index.html");
console.log(filePath);

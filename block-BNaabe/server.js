let absoluteServer = __dirname + "/server.js";

let absoluteApp = __dirname + "/app.js";

var relativeIndex = "./index.html";

var absoluteIndex = __dirname + "/index.html";

var http = require("http");

var qs = require("querystring");

var server = http.createServer(handleRequest);

/*
function handleRequest(req, res) {
  var dataFormat = req.headers["content-type"];
  var store = "";
  req.on("data", (chunk) => {
    store = store + chunk;
  });

  req.on("end", () => {
    if (req.method === "POST" && dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      res.statusCode = 201;
      res.setHeader("Content-Type", "text/plain");
      res.end(store);
    }
    if (
      req.method === "POST" &&
      dataFormat === "application/x-www-form-urlencoded"
    ) {
      var parsedQueryData = qs.parse(store);
      res.statusCode = 201;
      res.setHeader("Content-Type", "text/plain");
      res.end(JSON.stringify(parsedQueryData));
    }
  });
}

server.listen(3000, () => {
  console.log("Running on server 3000");
});
*/

/*
function handleRequest(req, res) {
  var dataFormat = req.headers["content-type"];
  var store = "";
  req.on("data", (chunk) => {
    store = store + chunk;
  });

  req.on("end", () => {
    if (req.method === "POST" && dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      res.statusCode = 201;
      res.setHeader("Content-Type", "text/plain");
      res.end(store);
    }
    if (
      req.method === "POST" &&
      dataFormat === "application/x-www-form-urlencoded"
    ) {
      var parsedQueryData = qs.parse(store);
      res.statusCode = 201;
      res.setHeader("Content-Type", "text/plain");
      res.end(JSON.stringify(parsedQueryData));
    }
  });
}

server.listen(9000, () => {
  console.log("Running on server 9000");
});
*/

function handleRequest(req, res) {
  var dataFormat = req.headers["content-type"];
  var store = "";
  req.on("data", (chunk) => {
    store = store + chunk;
  });

  req.on("end", () => {
    if (req.method === "POST" && dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      res.statusCode = 201;
      res.setHeader("Content-Type", "text/html");
      res.end(store);
    }
    if (
      req.method === "POST" &&
      dataFormat === "application/x-www-form-urlencoded"
    ) {
      var parsedQueryData = qs.parse(store);
      res.statusCode = 201;
      res.setHeader("Content-Type", "text/html");
      res.end(JSON.stringify(parsedQueryData));
    }
  });
}

server.listen(5000, () => {
  console.log("Running on server 3000");
});

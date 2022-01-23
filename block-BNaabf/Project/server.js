//Server
var http = require("http");

var fs = require("fs");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/form") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./form.html").pipe(res);
  }
  if (req.method === "POST" && req.url === "/form") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./form.html").pipe(res);
  }
}

server.listen(5678);

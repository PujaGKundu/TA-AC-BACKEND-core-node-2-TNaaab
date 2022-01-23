var path = require("path");

let absoluteServer = __filename;

let absoluteApp = __dirname + "/app.js";

var relativeIndex = "./index.html";

var absoluteIndex = path.join(__dirname + "/index.html");

var http = require("http");

var qs = require("querystring");

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "POST" && req.url === "/") {
    var store = "";
    req
      .on("data", (chunk) => {
        store += chunk;
      })
      .on("end", () => {
        res.statusCode = 201;
        var parsedData = qs.parse(store);
        res.end(JSON.stringify(parsedData));
      });
  }
}

server.listen(3000, () => {
  console.log("Running on server 3000");
});

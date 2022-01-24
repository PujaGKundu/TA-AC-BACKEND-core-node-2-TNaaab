const http = require("http");

const express = require("express");

//var cors = require("cors");

const usersRouter = require("./users/user");

const app = express();

app.use(express.json());

//app.use(cors({ origin: "http://localhost:8100" }));

app.use("/user", usersRouter);

app.use("/", function (req, res) {
  res.send("Node is working");
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server listening to port 3000");
});

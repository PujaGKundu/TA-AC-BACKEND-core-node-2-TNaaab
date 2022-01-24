const express = require("express");

const router = express.Router();

let data = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    username: "john",
    bio: "Is a programmer",
  },
  {
    id: 2,
    name: "Arya",
    email: "arya@gmail.com",
    username: "Arya",
    bio: "Is a programmer",
  },
  {
    id: 3,
    name: "Jack",
    email: "jack@gmail.com",
    username: "Jack",
    bio: "Is a programmer",
  },
  {
    id: 4,
    name: "Sam",
    email: "sam@gmail.com",
    username: "Sam",
    bio: "Is a programmer",
  },
];

router.get("/", function (req, res) {
  res.status(200).json(data);
});

router.get("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", function (req, res) {
  let userIds = data.map((user) => user.id);
  let newId = userIds.length > 0 ? Math.max.apply(Math, userIds) + 1 : 1;
  let newUser = {
    id: newId,
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    bio: req.body.bio,
  };
  data.push(newUser);
  res.status(201).json(newUser);
});

router.put("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let updated = {
      id: found.id,
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      bio: req.body.bio,
    };

    let targetedIndex = data.indexOf(found);
    data.splice(targetedIndex, 1, updated);

    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let targetedIndex = data.indexOf(found);
    data.splice(targetedIndex, 1);

    res.sendStatus(204);
  }
});

module.exports = router;

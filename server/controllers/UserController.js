const { User } = require("../connection").models;
const CRUD = require("./CRUD");
const router = require("express").Router();
const { checkToken } = require("./Middleware");
const jwt = require("jsonwebtoken");

router.get("/token", async (req, res) => {
  console.log(process.env.JWT_SECRET_KEY);
  const foo = "bar";
  await jwt.sign({ foo }, process.env.JWT_SECRET_KEY, (err, token) => {
    if (err) res.status(500).json(err);
    res.status(200).send(token);
  });
});

CRUD(router, User, {
  all: [checkToken],
  get: [],
  post: [],
  put: [],
  delete: [],
});

module.exports = router;

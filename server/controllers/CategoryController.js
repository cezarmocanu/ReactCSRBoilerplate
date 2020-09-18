const { Category } = require("../connection").models;
const CRUD = require("./CRUD");
const router = require("express").Router();
const { checkToken } = require("./Middleware");

CRUD(router, Category, {
  all: [checkToken],
  get: [],
  post: [],
  put: [],
  delete: [],
});

module.exports = router;

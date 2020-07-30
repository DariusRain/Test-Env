const _O = require("../_O");
const api = require("./configure/api");
const server = require("./configure/server");
const database = require("./configure/database");
const models = require("./configure/models")
_O({
  api,
  database,
  server,
  models
});

const _O = require("../_O");
const api = require("./configure/api");
const server = require("./configure/server");
const database = require("./configure/database");
_O({
  api,
  database,
  server,
});

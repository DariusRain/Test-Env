const _O = require("../_O");
const api = require("./configure/api");
const models = require("./configure/models")
const secrets = require("./configure/secrets")
const middleware = require("./configure/middleware")

_O({
  api,
  models,
  secrets,
  middleware
});

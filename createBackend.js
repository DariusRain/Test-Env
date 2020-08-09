const _O = require("../_O");
const api = require("./configureBackend/api");
const models = require("./configureBackend/models")
const secrets = require("./configureBackend/secrets")
const middleware = require("./configureBackend/middleware")

_O({
  api,
  models,
  secrets,
  middleware
});

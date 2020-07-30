
const express = express;
const server = express();

const users = require("./routes/api/users");
server.use('/api/users', users);
const profiles = require("./routes/api/profiles");
server.use('/api/profiles', profiles);
const {port} = require("./config");

app.listen(port || process.env.PORT, () => console.log("Server Listening on:", port));
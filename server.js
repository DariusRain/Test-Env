
const express = require("express");
const server = require("express");
const users = require("./routes/api/users");
server.use('/api/users', users);
const profiles = require("./routes/api/profiles");
server.use('/api/profiles', profiles);
try {
        server.listen(5000, () => {
            console.log("Server connected.")
        })
    } catch (err) {
        console.log("Server connection error");
    }

const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config");

module.exports = async (req, res, next) => {
            try {
                const token = req.headers("x-auth-token");
                const decodedUser = await jwt.verify()
            } catch (err) {
                console.error(err);
                res.status(500).json({msg: "Server error"})
            }
        }

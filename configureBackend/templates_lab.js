// Templating for common activities

// API
// Get all by collection name
`async (req, res) => {
    try {
        const getAll${collection}s = await ${collection}.find();
        res.status(200).json(getAll${collection}s);
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: "Server Error."})
    }
}`;

// Requiring packages & files
`const {Router} = require("express");
const router = Router();
${requiredModels.forEach(model => `const ${model} = require("${path}${model}")`)}
${requiredMiddleWare}
`


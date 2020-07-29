module.exports = {
  api: {
    users: {
      // require: ["Models/User", "Middleware/auth", "_O/Validator"],
      get: `async (req, res) => {
        try {
            const getAllUsers = await User.find();
            res.status(200).json(getAllusers);
        } catch {
            res.status(500).json({msg: "Server Error."})
        }
      }`,
      post: `async (req, res) => {
        try {
            const getAllUsers = await User.find();
            res.status(200).json(getAllusers);
        } catch {
            res.status(500).json({msg: "Server Error."})
        }
      }`,
    },
    profiles: {
      // require: ["Models/Profile", "Middleware/auth", "_O/Validator"],
      get: `async (req, res) => {
        try {
            const getAllUsers = await Profile.find();
            res.status(200).json(getAllusers);
        } catch {
            res.status(500).json({msg: "Server Error."})
        }
      }`,
      post: `async (req, res) => {
        try {
            const getAllUsers = await User.find();
            res.status(200).json(getAllusers);
        } catch {
            res.status(500).json({msg: "Server Error."})
        }
      }`,
    },
  },
};



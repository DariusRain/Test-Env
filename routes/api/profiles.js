
const {Router} = require("express");
const router = Router();


router.get("/", async (req, res) => {
        try {
            const getAllUsers = await Profile.find();
            res.status(200).json(getAllusers);
        } catch {
            res.status(500).json({msg: "Server Error."})
        }
      })

router.post("/", async (req, res) => {
        try {
            const getAllUsers = await User.find();
            res.status(200).json(getAllusers);
        } catch {
            res.status(500).json({msg: "Server Error."})
        }
      })
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

//getting details of the user

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Server Error" });
  }
});

//login for a user

router.post(
  "/",
  [
    check("email", "email id required").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    const { password, email } = req.body;
    try {
      let user = await User.findOne({ email });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!user && !isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      } else {
        const payload = {
          user: {
            id: user.id
          }
        };
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          {
            expiresIn: 360000
          },
          (error, token) => {
            if (error) {
              throw error;
            }
            res.json({ token });
          }
        );
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
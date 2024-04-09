const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const JWT_SECRET = "vireshisgoodboy";
const jwt = require("jsonwebtoken");

// Create a User using: POST "/api/auth/createuser". no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  //if there are error return error and bad request
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether user already exist

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry user with this email already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        id: user.id,
      };

      const jwtdata = jwt.sign(data, JWT_SECRET);
      console.log(jwtdata);
      res.json({ jwtdata });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;

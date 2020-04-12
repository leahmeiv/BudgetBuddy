//user router (backend)
const express = require('express');
const servRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/userModel");

servRouter.post("/register", (req, res) => {
  // Validating entered data
  const { errors, isValid } = validateRegisterInput(req.body);
// If anything is invalid, executes this
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //else, it checks if email exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
// Hashes password for security purposes
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//router to login page
servRouter.post("/login", (req, res) => {
  const {errors, isValid} = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

//find document within the collection of users that matches the email given
  User.findOne({email: email}).then(user => {
    //check if user exists; if not, return error
    if (!user) {
      return res.status(404).json({emailnotfound: "Email not found"});
    }
    //checking if password matches
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {id: user.id, name: user.firstName};
        jwt.sign(payload, keys.secretOrKey, {expiresIn: 31556926},
          (error, token) => {
          res.json({success: true, token: "Bearer" + token});
          }
          );
      } else {return res.status(400).json({passwordincorrect: "Password incorrect"})}
    });
  });
});

module.exports = servRouter;
//auth.js

const express = require('express');
const authRoutes = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

authRoutes.route('/sign-up/').post( (req, res) => {
  const { username, password } = req.body;
  const user = new User({username, password});
  console.log(user);
  user.save(function(err) {
    if (err){
      res.status(500).send("Error registering. Pls try again");
    } else {
      res.status(200).send("Yas! Welcome to the cool club!");
    }
  });
});

module.exports = authRoutes;
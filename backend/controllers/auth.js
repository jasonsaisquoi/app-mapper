//auth.js

const express = require('express');
const authRoutes = express.Router();
const User = require('../models/User')

//Sign Up
authRoutes.route(`/signup`).post( (req,res)=> {
  const user = new User(req.body);
  user
    .save()
    .then( user => {
      res.redirect("/");
   })
  .catch (err => console.log(err));
})

module.exports = authRoutes;
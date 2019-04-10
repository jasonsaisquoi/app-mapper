//auth.js

const express = require('express');
const authRoutes = express.Router();
const User = require('../models/User')

//get users 
authRoutes.route('/users').get( (req,res) => {
  User.find( (err, users) => {
    if (err) return console.log(err);
    else res.json(users);
  })
})

//Sign Up
authRoutes.route(`/sign-up`).post( (req,res)=> {
  const user = new User(req.body);
  user
    .save()
    .then( user => {
      res.status(200).json({'user':'user added succesfully'})
   })
  .catch (err => {
    res.status(400).send("unable to save user to the DB");
  });
})

module.exports = authRoutes;
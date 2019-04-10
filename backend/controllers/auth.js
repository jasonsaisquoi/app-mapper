//auth.js

const express = require('express');
const authRoutes = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

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
      let token = jwt.sign({_id: user._id}, process.env.SECRET, { expiresIn: "30 Days"});
      res.cookie('nToken', token, {maxAge: 900000, httpOnly: true });
      res.status(200).json({'user':'user added succesfully'})
   })
  .catch (err => {
    res.status(400).send("unable to save user to the DB", { err: err});
  });
})

//log out
authRoutes.route('/logout').get( (req,res) => {
  res.clearCookie('nToken');
  res.status(200).send('cookie removed');
});

//log in 
authRoutes.route('/login').get( (req, res) => {
  res.status(200).send('logged in!');
})

//log in post route
authRoutes.route('/login').post( (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //find the username in the DB
  User.findOne({username}, "username password")
    .then(user => {
      if (!user) {
        return res.status(401).send({message: '401 Error: Wrong username or password'});
      }
      //check the password 
        if (!isMatch) {
          //password is wrong
          return res.status(401).send ({message: "401 Error: Wrong username or password"})
        }

        //create jwt token
        const token = jwt.sign({_id: user._id, username: user.username }, process.env.SECRET, {
          expiresIn: "30 days"
        });
        //set the cookie and redirect
        res.cookie("nToken", token, {maxAge: 900000, httpOnly: true });
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = authRoutes;
//auth.js

const express = require('express');
const authRoutes = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = authRoutes;
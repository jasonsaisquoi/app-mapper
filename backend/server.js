//back-end server.js
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const projectRoutes = require('./controllers/project.route');
const authRoutes = require('./controllers/auth');
const jwt = require('jsonwebtoken');
let cookieParser = require('cookie-parser');

const app = express();


//check authorization middleware
const checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  console.log('req.cookies:' + req.cookies.nToken)
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    let token = req.cookies.nToken;
    let decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }
  next();
};



mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(checkAuth);

//import routes
app.use('/project', projectRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

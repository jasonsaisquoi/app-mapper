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

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//import routes
app.use('/project', projectRoutes);
app.use('/auth', authRoutes);

//auth routes
app.post('/api/register', function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const constants = require('./config/constants');
require('./services/passport');
const User = require('./models/User.js');

const app = express();

app.use(
  cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 30, // Expire after 30 Days
    keys: ['asjadsKLasdnjKASDJSnjasndjnasjkdna']
  })
);

// Start MongoDB
mongoose.connect(constants.MONGO_URL);
var db = mongoose.connection;
db.once('open', function() {
  console.log("connected to mongoDB!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if(err){
    throw err;
  } else {
    console.log('Server started!');
  }
});

require('./routes/authRoutes')(app);

var Admin = new User({
  username: 'Admin',
  password: 'orange'
});

User.findOne({ username: 'Admin '}, function(err, user){
  if(err) { return done(err); }
  if(!user){
    Admin.save(function(err, user){
      if(err){
        throw err;
      }
      console.log(user);
    });
  }
  return user;
})

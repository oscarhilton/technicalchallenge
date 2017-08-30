const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


module.exports = app => {
  app.post('/api/version1/user/login',
      passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
      })
    );

  app.get('/api/version1/user/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  
  app.get('/api/version1/current_user', (req, res) => {
    res.send(req.user);
  });

}

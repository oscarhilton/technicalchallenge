// const bodyParser = require("body-parser");
// const bcrypt = require('bcryptjs');
// const User = require('../models/users/user.model.js');
//
// module.exports = app => {
//   //Use BodyParser for API
//   app.use(bodyParser.urlencoded({ extended: true }));
//   app.use(bodyParser.json());
//
//   app.post('/api/version1/user/login', function(req, res) {
//     var username = req.body.username;
//     var password = req.body.password;
//     if(username === User.username){
//       bcrypt.compare(password, User.password).then(function(success) {
//           if(success){
//             res.json({
//               message: 'Success',
//               current_user: username
//             })
//           } else {
//             res.json(res.json({
//               message: 'Wrong password',
//             }));
//           }
//       });
//     } else {
//       res.json(res.json({
//         message: 'Bad username'
//       }));
//     }
//   });
// }

const express = require('express');
const router = express.Router();

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) res.status(400).send('You are not logged in!');
  else next();
  };

router.post('/login', (req, res) => {
  let password = req.body.password;
  let email = req.body.email; 
  if (email && password) {
    const user = users.find((el => el.email === email && el.password === password)); 
    if (user) {
      req.session.userID = user.id;
      res.status(200).json({id: user.id, name: user.name});} 
      else res.status(401).send('Falsche Email oder falsches Passwort');
    } else res.status(400).send('Login fehlgeschlagen')
  }
);

router.get('/logout', redirectLogin, (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
});

router.post('/register', (req, res) => {
  let user = {};
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  let status400 = false;
    for (value in user) {
      if (!user[value] || user[value] == '') {
        status400 = true;
      }
    }
});

router.get('/secretdata', (req, res) => {
  return res.status(200).end('the prime number is 2305843009213693951');
});

module.exports = router;
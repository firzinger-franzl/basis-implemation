const express = require('express');
const router = express.Router();
const users = require('../model/users');
const redirectLogin = (req, res, next) => {
  if (!req.session.userId) res.status(400).send('You are not logged in!');
  else next();
  };
//Übergibt die Logindaten an den Cookie/Server und sorgt dafür, dass die Seite sich an den User erinnert.
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
//Entfernt die Daten aus dem Cookie
router.get('/logout', redirectLogin, (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
});
// Erstellt eine neuen Account samt Cookie und speichert diesen im Browser abn
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
//bruh
router.get('/secretdata', (req, res) => {
  return res.status(200).end('the prime number is 2305843009213693951');
});

module.exports = router;
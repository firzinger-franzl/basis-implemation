const express = require('express');
const router = express.Router();
// enter your code here

router.post('/login', (req, res) => {
  
  let password = req.body.password;
  let email = req.body.email;
  if (email && password) {
    const user = users.find((el => el.email === email && el.password === password));

  }

});

router.get('/logout', /*redirectLogin*/ (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
});

router.post('/register', (req, res) => {
  // enter your code here
});

router.get('/secretdata', (req, res) => {
  return res.status(200).end('the prime number is 2305843009213693951');
});

module.exports = router;
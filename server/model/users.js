const users = [
  {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    password: '1234',
  },
  {
    id: 2,
    name: 'Sandy',
    email: 'sandy@gmail.com',
    password: '1234',
  },
  {
    id: 3,
    name: 'Willy',
    email: 'willy@gmail.com',
    password: '1234',
  },
];
if (email && password) {
 const user = users.find(el => el.email === email &&
 el.password === password);
 if (user) {
 req.session.userId = user.id;
 res.status(200).json({ id: user.id, name: user.name });
 } else res.status(401).send('Wrong email or password');
} else res.status(400).send('Login failed')
module.exports = users;

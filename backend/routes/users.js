const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { username, password, remember } = req.body;
  const newUser = new User({ username, password, remember });
  newUser
    .save()
    .then(() => res.json('User Added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

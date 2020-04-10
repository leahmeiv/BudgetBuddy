const router = require('express').Router();
let User = require('../models/userModel');

//First route; handles get requests
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route to add a new user
router.route('/add').post((req,res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.amount;

  const newUser = new User({
    email,
    firstName,
    lastName,
    password,
  });

  newUser.save()
    .then(() => res.json('New user added'))
    .catch(err => res.status(400)
      .json('Error: ' + err));

});



module.exports = router;
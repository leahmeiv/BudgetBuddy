const router = require('express').Router();
let Expense = require('../models/expenseModel');

//getting expenses
router.route('/').get((req, res) => {
  Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route for adding new expenses
//route to add a new user
router.route('/add').post((req,res) => {
  const email = req.body.email;
  const description = req.body.description;
  const amount = Number(req.body.amount);
  const date = Date.parse(req.body.date);

  const newExpense = new Expense({
    email,
    description,
    amount,
    date,
  });

  newExpense.save()
    .then(() => res.json('New expense added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
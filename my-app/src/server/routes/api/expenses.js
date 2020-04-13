//user router (backend)
const express = require('express');
const servRouter = express.Router();
const Expense = require('../../models/expenseModel');

//route to find list of expenses
servRouter.route('/').get((req, res) => {
  Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json('Error: ' +err));
});

//route to post an expense
servRouter.route('/add').post((req, res) => {
  const description = req.body.description;
  const amount = Number(req.body.amount);
  const date = Date.parse(req.body.date);

  const newExpense = new Expense({
    description, amount, date
  });

  newExpense.save()
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error: ' + err));
});


servRouter.route('/:id').get((req,res) => {
  Expense.findById(req.params.id)
    .then(expense => res.json(expense))
    .catch(err => res.status(400).json('Error: ' + err));
});

servRouter.route('/:id').delete((req,res) => {
  Expense.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted'))
    .catch(err => res.status(400).json('Error: ' +err));
});

servRouter.route('/update/:id').post((req, res) => {
  Expense.findById(req.params.id)
    .then(expense => {
      expense.description = req.body.description;
      expense.amount = Number(req.body.amount);
      expense.date = Date.parse(req.body.date);

      expense.save()
        .then(() => res.json('Expense updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = servRouter;
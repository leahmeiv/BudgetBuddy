//user router (backend)
const express = require('express');
const servRouter = express.Router();
const keys = require("../../config/keys");
const Expense = require('../models/expenseModel');

servRouter.route('/add').post((req, res) => {
  const description = req.body.description;
  const amount = Number(req.body.amount);
  const date = Date.parse(req.body.date);

  const newExpense = new Expense ({
   description, amount, date
  });

  newExpense.save()
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = servRouter;
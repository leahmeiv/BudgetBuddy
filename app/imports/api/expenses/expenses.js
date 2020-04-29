import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Expenses = new Mongo.Collection('Expenses');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ExpenseSchema = new SimpleSchema({
  name: String,
  amount: Number,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Expenses.attachSchema(ExpenseSchema);

/** Make the collection and schema available to other code. */
export {Expenses, ExpenseSchema };
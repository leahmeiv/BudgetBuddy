//User publications and Database
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Expenses } from '../../api/expenses/expenses.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Expenses.insert(data);
}

/** Initialize the collection if empty. */
if (Expenses.find().count() === 0) {
  if (Meteor.settings.defaultExpenses) {
    console.log('Creating default Expenses.');
    Meteor.settings.defaultExpenses.map(data => addData(data));
  }
}

/** This subscription publishes all documents regardless of user */
Meteor.publish('ExpenseAdmin', function publish() {
  if (this.userId) {
    return Expenses.find({});
  }
  return this.ready();
});

/**This subscription publishes all documents owned by a specific student. */
Meteor.publish('Expenses', function publish() {
  const username = Meteor.users.findOne(this.userId).username;
  if (this.userId && Roles.userIsInRole(this.userId, 'user')) {
    return Expenses.find({ owner: username });
  }
  return this.ready();
});
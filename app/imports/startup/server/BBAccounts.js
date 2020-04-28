import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { User } from '/imports/api/user/user';

/* eslint-disable no-console */
function createUser(first, last, email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    firstname: first,
    lastname: last,
    email: email,
    username: email,
    password: password,
  });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
  if (role === 'student') {
    Roles.addUsersToRoles(userID, 'student');
  }
}

Meteor.methods({
  'serverCreateUser': function (first, last, email, password, role) {
    console.log(`  Creating user ${email}.`);
    const userID = Accounts.createUser({
      username: email,
      firstname: first,
      lastname: last,
      email: email,
      password: password,
    });
    if (role === 'admin') {
      Roles.addUsersToRoles(userID, 'admin');
    }
    if (role === 'user') {
      Roles.addUsersToRoles(userID, 'user');

      const owner = email;
      const budget = 0;
      const firstName = first;
      const lastName = last;

      User.insert({
        firstName: firstName,
        lastName: lastName,
        budget: budget,
        owner: owner,
      });
    }
    Meteor.publish(userID);
  },
});

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ firstname, lastname, email, password, role }) => createUser(firstname, lastname, email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
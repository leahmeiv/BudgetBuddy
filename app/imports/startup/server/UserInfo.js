import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { User } from '../../api/user/user.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  User.insert(data);
}

/** Initialize the collection if empty. */
if (User.find().count() === 0) {
  if (Meteor.settings.defaultUserInfo) {
    console.log('Creating default Users.');
    Meteor.settings.defaultUserInfo.map(data => addData(data));
  }
}

/** This subscription publishes all documents regardless of user */
/** Meteor.publish('User', function publish() {
  if (this.userId) {

    return User.find({});
  }
  return this.ready();
});
 */

/** This subscription publishes all documents owned by a specific student. */
Meteor.publish('User', function publish() {
  const username = Meteor.users.findOne(this.userId).username;
  if (this.userId && Roles.userIsInRole(this.userId, 'user')) {
    return User.find({ owner: username });
  }
  return this.ready();
});
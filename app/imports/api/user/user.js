import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const User = new Mongo.Collection('User');

/** Create a schema to constrain the structure of documents associated with this collection. */
const UserSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  budget: [Number],
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
User.attachSchema(UserSchema);

/** Make the collection and schema available to other code. */
export {User, UserSchema };
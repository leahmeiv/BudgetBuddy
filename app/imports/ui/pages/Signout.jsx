import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
      <Header as="h1" textAlign="center" inverted>
        <p>You are signed out</p>

        <p>Hope to see you again soon!</p>
      </Header>


    );
  }
}

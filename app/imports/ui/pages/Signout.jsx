import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';
import { Link  } from 'react-router-dom';


/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    const linkAlign = {
      textAlign: 'center'
    };

    const divSyle = {
      marginTop: '25%'
    }
    Meteor.logout();
    return (
      <div fluid style={divSyle}>
      <Header as="h1" textAlign="center" inverted>
        <p>You are signed out</p>

        <p>Hope to see you again soon!</p>

      </Header>
    <div style={linkAlign}>
        <Link to={'/'}>Go back to home</Link>
      </div>
      </div>



    );
  }
}

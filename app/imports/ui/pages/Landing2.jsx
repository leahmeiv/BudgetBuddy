import React from 'react';
import { Image, Button,Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { withRouter } from 'react-router-dom';



/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (

      <div>
        {this.props.currentUser === '' ? (
          <Container fluid>

          <p className="slogan1">
            <b>BE MY BUDGET BUDDY!</b>
          </p>
          <p className="slogan2">
            It's time to see how much you have spent...</p>

          <Button className="ui button one" primary as={NavLink} exact to="/signin">
            Login</Button>
          <Button className="ui button two" primary as={NavLink} exact to="/signup">
            Sign Up
          </Button>
          </Container>
          ) : ''}
      </div>
    );
  }
}
/** Declare the types of all properties. */
Landing.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const LandingContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Landing);
        export default withRouter(LandingContainer);

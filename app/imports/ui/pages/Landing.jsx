import React from 'react';
import { Image, Button, Container, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { withRouter } from 'react-router-dom';
import Landing2 from './Landing2';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {

    const slogan1 = {
      fontFamily: 'Helvetica',
      fontSize: '40px',
      position: 'absolute',
      top:'40%',
      left: '5%'
    };

    const slogan2 = {
      fontFamily: 'Helvetica',
      fontSize: '30px',
      fontWeight:'lighter',
      position: 'absolute',
      top:'47%',
      left: '5%'
    };

    const buttonOneStyle = {
      fontFamily: 'Helvetica',
      fontSize: '20px',
      position: 'absolute',
      left: '5%',
      top: '55%'
    };

    const buttonTwoStyle = {
      fontFamily: 'Helvetica',
      fontSize: '20px',
      position: 'absolute',
      left: '20%',
      top: '55%'

    };

    return (
      <div>
        {this.props.currentUser !== '' ? (
            <style>{'body { background: rgba(222,242,241, 0.7)  url(\'/images/home-background.jpeg\') no-repeat center center fixed;  background-size: cover; }'}
            </style>
          ) : ''}

        {this.props.currentUser === '' ? (

            <style>{'body { background: rgba(222,242,241, 0.7)  url(\'/images/home-background.jpeg\') no-repeat center center fixed;  background-size: cover; }'}
            </style>

        ) : ''}
        <Landing2/>
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

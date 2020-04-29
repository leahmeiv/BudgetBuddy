import React from 'react';
import { Image, Button,Grid, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { withRouter } from 'react-router-dom';



/** A simple static component to render some text for the landing page. */
class Landing2 extends React.Component {
  render() {

    const slogan1 = {
      fontFamily: 'Helvetica',
      fontSize: '60px',
      position: 'absolute',
      color: '#2b7a78',
      top:'35%',
    };

    const slogan2 = {
      fontFamily: 'Helvetica',
      fontSize: '30px',
      fontWeight:'lighter',
      position: 'absolute',
      color: '#def2f1',
      top:'45%'
    };

    const buttonOneStyle = {
      fontFamily: 'Helvetica',
      fontSize: '20px',
      fontWeight:'lighter',
      position: 'absolute',
      left: '40%',
      top: '52%'
    };

    const buttonTwoStyle = {
      fontFamily: 'Helvetica',
      fontSize: '20px',
      fontWeight:'lighter',
      position: 'absolute',
      left: '55%',
      top: '52%'
    };

    return (
<div>
        {this.props.currentUser === '' ? (

          <Grid container divided='vertically' textAlign='center'>

          <p style={slogan1}>
            <b>BE MY BUDGET BUDDY!</b>
          </p>
          <p style={slogan2}>
            It's time to see how much you have spent...</p>

          <Button  class={'ui basic teal button'} style={buttonOneStyle} primary as={NavLink} exact to="/signin">
            Login</Button>

          <Button class={'ui secondary  button'} style={buttonTwoStyle} primary as={NavLink} exact to="/signup">
            Join
          </Button>
          </Grid>

        ) : ''}
</div>


  );
  }
}
/** Declare the types of all properties. */
Landing2.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const Landing2Container = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Landing2);
        export default withRouter(Landing2Container);

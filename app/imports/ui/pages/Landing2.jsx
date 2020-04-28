import React from 'react';
import { Image, Button,Grid, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { withRouter } from 'react-router-dom';



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


  // .ui.button.one{
  //     position: absolute;
  //     top:65%;
  //     left:5%;
  //     background-color:white;
  //     font-family: "Arial Narrow",sans-serif;
  //     color:black;
  //     font-size: 20px;
  //   }
  // .ui.button.two{
  //     position: absolute;
  //     top:65%;
  //     left:20%;
  //     background-color:white;
  //     font-family: "Arial Narrow",sans-serif;
  //     color:black;
  //     font-size: 20px;
  //   }


    return (
      <div>
        {this.props.currentUser === '' ? (

          <Grid verticalAlign='middle'>
<Container>
          <p style={slogan1}>
            <b>BE MY BUDGET BUDDY!</b>
          </p>
          <p style={slogan2}>
            It's time to see how much you have spent...</p>

          <Button basic style={buttonOneStyle} primary as={NavLink} exact to="/signin">
            Login</Button>

          <Button style={buttonTwoStyle} primary as={NavLink} exact to="/signup">
            Sign Up
          </Button>
</Container>
          </Grid>
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

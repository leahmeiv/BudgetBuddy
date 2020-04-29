import React from 'react';
import { Container, Grid,Header  } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";


/** A simple static component to render some text for the landing page. */
class About extends React.Component {
  render() {


    const aboutSlogan ={
      fontSize:'30px',
      position: 'absolute',
      top: '80%',
      color: '#2b7a78',
      backgroundColor: 'black',
    };

    const aboutFont = {
      position: 'absolute',
      fontSize: '18px',
      top: '87%',
      color: '#def2f1'
    };

    return (
      <div>
        {this.props.currentUser === '' ? (

          <Grid container divided='vertically' textAlign='center'>
          <Header style={aboutSlogan}>
            <b>ABOUT BUDGET BUDDY</b>
          </Header>
          <Header style={aboutFont}> We understand how hard it is to keep track of your own expenses and spending
            habits. BudgetBuddy is a tool intended to help with that. Each month, BudgetBuddy will generate a monthly
            report based off of your expenses. Compiled reports contain a total of your expenses and report the user's
            spending habits. All you have to do is log down your online expenses and we will do the rest.
          </Header>
          <Grid/>
        </Grid>
        ) : ''}

      </div>
    );
  }
}
/** Declare the types of all properties. */
About.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const AboutContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(About);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(AboutContainer);


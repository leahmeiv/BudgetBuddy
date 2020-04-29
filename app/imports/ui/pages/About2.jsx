import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";


/** A simple static component to render some text for the landing page. */
class About2 extends React.Component {
  render() {

    const divStyle = {
      marginTop: '500px'
    };

    const aboutSlogan ={
      fontSize:'30px',
      position: 'absolute',
      top: '40%',
      color: '#2b7a78',
      left: '5%'
    };

    const aboutFont = {
      position: 'absolute',
      fontSize: '18px',
      top: '47%',
      color: '#def2f1',
      left: '5%'
    };

    return (
<div style={divStyle}>

  {this.props.currentUser !== '' ? (

          <div>

            <style>{'body { background: rgba(222,242,241, 0.7)  url(\'/images/about-background.png\') no-repeat center center fixed;  background-size: cover; background-blend-mode: overlay }'}
            </style>
<div>
  <Header style={aboutSlogan}>
            <b>ABOUT BUDGET BUDDY</b>
          </Header>
          <Header style={aboutFont}> We understand how hard it is to keep track of your own expenses and spending
            habits. BudgetBuddy is a tool intended to help with that. Each month, BudgetBuddy will generate a monthly
            report based off of your expenses. Compiled reports contain a total of your expenses and report the user's
            spending habits. All you have to do is log down your online expenses and we will do the rest.
          </Header>
</div>
      </div>
        ) : ''}


      </div>
    );
  }
}

/** Declare the types of all properties. */
About2.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const About2Container = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(About2);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(About2Container);

